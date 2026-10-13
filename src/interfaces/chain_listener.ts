import { PaymentInvoice } from '../domain/payment_session';

export interface IChainListener {
  readonly chainName: string;
  startTracking(address: string, invoice: PaymentInvoice): Promise<void>;
  stopTracking(address: string): Promise<void>;
  getConfirmationDepth(txHash: string): Promise<number>;
}
