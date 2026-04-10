import { useContext, useMemo } from "react";
import styled from "styled-components";
import { MessagingContext } from "../../../messaging/context/MessagingContext";
import { RegisteredDevicesContext } from "../../../messaging/context/RegisteredDevicesContext";
import { deleteToken } from "../../../messaging/firebase/deleteToken";
import { parseUserAgent } from "../../../messaging/operators/parseUserAgent";
import type { RegisteredDevice } from "../../../messaging/types/RegisteredDevice";
import { selectUserId } from "../../../session/selectors/selectUserId";
import { useAppSelector } from "../../../store/hooks/useStore";
import { mediaMobile } from "../../../theme/constants/queries";
import { border } from "../../../theme/constants/styles";

const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ItemWrapper = styled.li`
  ${border}
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  transition: box-shadow 0.15s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 12px;
  }

  ${mediaMobile`
    flex-wrap: wrap;
    padding: 10px 12px;
    gap: 8px;
  `}
`;

const DeviceIcon = styled.span`
  font-size: 20px;
  flex-shrink: 0;
`;

const DeviceInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
`;

const DeviceName = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: ${(props) => props.theme.colors.main};
  display: flex;
  align-items: center;
  gap: 6px;
`;

const CurrentBadge = styled.span`
  padding: 1px 6px;
  border-radius: 10px;
  font-size: 10px;
  font-weight: 600;
  background-color: ${(props) => props.theme.colors.accent}14;
  color: ${(props) => props.theme.colors.accent};
`;

const DeviceTimestamp = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.colors.secondary};
`;

const RemoveButton = styled.button`
  padding: 6px 12px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: ${(props) => props.theme.borderRadius};
  background: none;
  font-family: inherit;
  font-size: 12px;
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    border-color: #d93025;
    color: #d93025;
  }

  ${mediaMobile`
    margin-left: auto;
  `}
`;

const EmptyText = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${(props) => props.theme.colors.secondary};
  text-align: center;
  padding: 16px;
`;

const StatusText = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${(props) => props.theme.colors.secondary};
  text-align: center;
  padding: 16px;
`;

const ErrorText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #d93025;
  text-align: center;
  padding: 16px;
`;

const getDeviceIcon = (ua?: string): string => {
  if (!ua) return "💻";
  if (/iPhone|iPad|iPod/i.test(ua)) return "📱";
  if (/Android/i.test(ua)) return "📱";
  if (/Windows/i.test(ua)) return "💻";
  if (/Macintosh|Mac OS/i.test(ua)) return "💻";
  if (/Linux/i.test(ua)) return "🖥️";
  return "💻";
};

interface DeviceItemProps {
  device: RegisteredDevice;
  isCurrentDevice: boolean;
  onDelete: () => void;
}

const DeviceItem = ({ device, isCurrentDevice, onDelete }: DeviceItemProps) => {
  const formattedDate = useMemo(() => {
    const formatter = new Intl.DateTimeFormat(undefined, {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
    return formatter.format(device.timestamp);
  }, [device.timestamp]);

  const friendlyName = parseUserAgent(device.userAgent);

  return (
    <ItemWrapper>
      <DeviceIcon>{getDeviceIcon(device.userAgent)}</DeviceIcon>
      <DeviceInfo>
        <DeviceName>
          {friendlyName}
          {isCurrentDevice && <CurrentBadge>This device</CurrentBadge>}
        </DeviceName>
        <DeviceTimestamp>Last active {formattedDate}</DeviceTimestamp>
      </DeviceInfo>
      <RemoveButton
        type="button"
        onClick={onDelete}
        aria-label={`Remove ${friendlyName}`}
      >
        Remove
      </RemoveButton>
    </ItemWrapper>
  );
};

interface DevicesListProps {
  devices: [string, RegisteredDevice][];
}

const RegisteredDevicesList = ({ devices }: DevicesListProps) => {
  const messaging = useContext(MessagingContext);
  const currentDevice = messaging.token;

  const userId = useAppSelector(selectUserId);
  const onDelete = (deviceToken: string) => {
    if (userId) {
      deleteToken(userId, deviceToken).catch(console.error);
    }
  };

  if (devices.length === 0) {
    return (
      <EmptyText>No devices registered for push notifications yet.</EmptyText>
    );
  }

  return (
    <ListWrapper>
      {devices.map(([deviceToken, device]) => (
        <DeviceItem
          key={deviceToken}
          device={device}
          isCurrentDevice={deviceToken === currentDevice}
          onDelete={() => onDelete(deviceToken)}
        />
      ))}
    </ListWrapper>
  );
};

export const RegisteredDevicesEditor = () => {
  const asyncRegisteredDevices = useContext(RegisteredDevicesContext);
  const sortedDevices = useMemo(() => {
    if (asyncRegisteredDevices.state === "fulfilled") {
      return Object.entries(asyncRegisteredDevices.data).sort(
        ([, a], [, b]) => b.timestamp - a.timestamp
      );
    }
    return [];
  }, [asyncRegisteredDevices]);

  if (
    asyncRegisteredDevices.state === "idle" ||
    asyncRegisteredDevices.state === "loading"
  ) {
    return <StatusText>Loading devices…</StatusText>;
  }

  if (asyncRegisteredDevices.state === "failed") {
    return <ErrorText>Failed to load devices. Please try again.</ErrorText>;
  }

  return <RegisteredDevicesList devices={sortedDevices} />;
};
