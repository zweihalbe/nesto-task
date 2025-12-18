export type Employee = string;

export const NODE_TYPES = {
  STORE: 'store',
  AREA: 'area',
  HQ: 'hq',
} as const;

export type Time = number;

export function parseTime(timeString: string): Time {
  const parts = timeString.split(':').map(Number)

  if (parts.length !== 2 || parts.some(Number.isNaN)) {
    throw new Error(`Invalid time string: ${timeString}`)
  }

  const [hours, minutes] = parts
  return (hours || 0) * 60 + (minutes || 0)
}

export function formatTime(time: Time): string {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

export interface Shift {
  start: Time;
  end: Time;
}

export interface Store {
  type: typeof NODE_TYPES.STORE;
  name: string;
  employees: Employee[];
}

export interface Area {
  type: typeof NODE_TYPES.AREA;
  name: string;
  manager: string;
  children: OrganizationNode[];
}

export interface Headquarter {
  type: typeof NODE_TYPES.HQ;
  name: string;
  children: OrganizationNode[];
}

export type OrganizationNode = Store | Area;

export type Schedule = Record<Employee, Shift[]>;

