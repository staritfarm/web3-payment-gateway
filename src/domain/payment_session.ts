export type SupportedChain = 'ETHEREUM' | 'BSC' | 'TRON' | 'POLYGON' | 'SOLANA';
export type PaymentStatus = 'PENDING' | 'DETECTED' | 'CONFIRMED' | 'EXPIRED' | 'OVERPAID' | 'UNDERPAID';

export interface PaymentInvoice {
  invoiceId: string;
  merchantId: string;
  expectedAmount: string;
  currency: 'USDT' | 'USDC' | 'BTC' | 'ETH';
  chain: SupportedChain;
  recipientAddress: string;
  requiredConfirmations: number;
  currentConfirmations: number;
  status: PaymentStatus;
  expiresAt: Date;
  txHash?: string;
}

export interface WebhookPayload {
  event: 'payment.confirmed' | 'payment.partial' | 'payment.expired';
  invoiceId: string;
  amountReceived: string;
  txHash: string;
  timestamp: number;
  signature: string;
}
