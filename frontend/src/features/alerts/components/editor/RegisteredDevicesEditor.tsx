import { useContext, useMemo } from "react";
import styled from "styled-components";
import { MessagingContext } from "../../../messaging/context/MessagingContext";
import { RegisteredDevicesContext } from "../../../messaging/context/RegisteredDevicesContext";
import { deleteToken } from "../../../messaging/firebase/deleteToken";
import { RegisteredDevice } from "../../../messaging/types/RegisteredDevice";
import { selectUserId } from "../../../session/selectors/selectUserId";
import { useAppSelector } from "../../../store/hooks/useStore";
import { Card } from "../../../theme/components/Card";

const ItemWrapper = styled.li`
  &:not(:last-child) {
    margin-bottom: 1em;
  }
  &:hover {
    filter: brightness(96%);
  }
`;

const CardContents = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  column-gap: 8px;
  row-gap: 16px;
`;

const Metadata = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 8px;
  row-gap: 8px;
`;

const Title = styled.span`
  font-weight: 500;
`;

const Subtitle = styled.span`
  display: flex;
  font-size: 12px;
  color: ${(props) => props.theme.colors.secondary};
  white-space: nowrap;
  text-overflow: ellipsis;
  min-width: 0;
`;

interface RegisteredDevicesListItemProps {
  device: RegisteredDevice;
  isCurrentDevice: boolean;
  onDelete: () => void;
}

const RegisteredDevicesListItem = ({
  device,
  isCurrentDevice,
  onDelete,
}: RegisteredDevicesListItemProps) => {
  const formattedDate = useMemo(() => {
    const formatter = new Intl.DateTimeFormat(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
    return formatter.format(device.timestamp);
  }, [device.timestamp]);
  return (
    <ItemWrapper>
      <Card>
        <CardContents>
          <Metadata>
            <Title>
              {isCurrentDevice && "(This device) "}
              {device.userAgent || "Unknown device"}
            </Title>
            <Subtitle>Last updated {formattedDate}</Subtitle>
          </Metadata>
          <button type="button" onClick={() => onDelete()}>
            Delete
          </button>
        </CardContents>
      </Card>
    </ItemWrapper>
  );
};

const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

interface Props {
  devices: [string, RegisteredDevice][];
}

const RegisteredDevicesList = ({ devices }: Props) => {
  const messaging = useContext(MessagingContext);
  const currentDevice = messaging.token;

  const userId = useAppSelector(selectUserId);
  const onDelete = (deviceToken: string) => {
    userId && deleteToken(userId, deviceToken).catch(console.error);
  };

  if (devices.length === 0) {
    return <p>No devices have been registered to receive notifications</p>;
  }

  return (
    <div>
      <ListWrapper>
        {devices.map(([deviceToken, device], index) => {
          const isCurrentDevice = deviceToken === currentDevice;
          return (
            <RegisteredDevicesListItem
              key={index}
              device={device}
              isCurrentDevice={isCurrentDevice}
              onDelete={() => onDelete(deviceToken)}
            />
          );
        })}
      </ListWrapper>
    </div>
  );
};

export const RegisteredDevicesEditor = () => {
  const asyncRegisteredDevices = useContext(RegisteredDevicesContext);
  const sortedDevices = useMemo(() => {
    if (asyncRegisteredDevices.state === "fulfilled") {
      return Object.entries(asyncRegisteredDevices.data).sort(
        ([, a], [, b]) => b.timestamp - a.timestamp
      );
    } else {
      return [];
    }
  }, [asyncRegisteredDevices]);

  if (
    asyncRegisteredDevices.state === "idle" ||
    asyncRegisteredDevices.state === "loading"
  ) {
    return <p>Loading...</p>;
  }

  if (asyncRegisteredDevices.state === "failed") {
    return <p>Failed to load: {asyncRegisteredDevices.error.message}</p>;
  }

  return <RegisteredDevicesList devices={sortedDevices} />;
};
