import type { Headquarter, OrganizationNode, Store, Employee, Shift } from "./models.ts";
import { NODE_TYPES, formatTime } from './models.ts';

export function collectStores(node: OrganizationNode | Headquarter): Store[] {
  if (node.type === NODE_TYPES.STORE) {
    return [node];
  }

  return node.children.flatMap(collectStores);
}

export function collectEmployees(
  node: OrganizationNode | Headquarter
): Employee[] {
  if (node.type === NODE_TYPES.STORE) {
    return node.employees;
  }

  return node.children.flatMap(collectEmployees);
}

export function collectStoreShifts(store: Store, schedule: Record<string, Shift[]>): Record<string, Shift[]> {
  return Object.fromEntries(store.employees.map(e => [e, schedule[e] || []]));
}

export function formatShift(shift: Shift): string {
  return `${formatTime(shift.start)} – ${formatTime(shift.end)}`;
}
