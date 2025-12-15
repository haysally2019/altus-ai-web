export interface Lead {
  id: string;
  name: string;
  address: string;
  status: 'New' | 'Contacted' | 'Estimate Sent' | 'Closed Won' | 'Closed Lost';
  value: number;
  lastContact: string;
}

export interface Stat {
  name: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
}

export enum AppView {
  LANDING = 'LANDING',
  DASHBOARD = 'DASHBOARD',
}
