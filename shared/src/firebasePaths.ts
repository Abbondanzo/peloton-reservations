export const PATHS = {
  alerts: (userId: string) => `alerts/${userId}`,
  alert: (userId: string, alertId: string) => `alerts/${userId}/${alertId}`,
  alertPreferences: (userId: string) => `alertPreferences/${userId}`,
  messagingTokens: (userId: string) => `messagingTokens/${userId}`,
  messagingToken: (userId: string, token: string) =>
    `messagingTokens/${userId}/${token}`,
  classHistory: (studioId: string) => `classHistory/${studioId}`,
  classSnapshot: (studioId: string, classId: string | number) =>
    `classHistory/${studioId}/${classId}`,
} as const;
