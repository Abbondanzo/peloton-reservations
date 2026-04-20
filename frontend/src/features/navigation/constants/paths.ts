export const Paths = {
  CLASS_LIST: "/class-list",
  ABOUT: "/about",
  SIGN_IN: "/sign-in",
  ALERTS: "/alerts",
  ALERTS_EDITOR: "/alerts/edit",
  ALERTS_SIMULATION: "/alerts/:alertId/test",
  STATS: "/stats",
} as const;

export const alertsSimulationPath = (alertId: string) =>
  `/alerts/${alertId}/test`;
