export type DetailsPaymentType = {
  price: string;
  transferToWhere: string;
  imgCountry: string;
  detailsPay: string;
};

export type ContentAddFileTypes = {
  paymentProof: FileList;
  selectedClientName: string;
  selectedClientAmount: string;
};

export type DetailsPaymentInfoProps = {
  text: string;
  describe?: boolean;
};

export type PayHeaderType = {
  name: string;
  price: string;
  comissia?: string;
};

export type Lang = {
  url: string;
  tag: string;
  name: string;
};

export type createPaymentType = {
  country_iso: string;
  amount_usd: number;
  amount_local: number;
  webhook_url: string;
  success_url: string;
};

export type PaymentResponseType = {
  id: number;
  status: string;
  amount_local: string;
  amount_usd: string;
  country: {
    iso_code: string,
    name: string,
    currency_code: string,
    usd_rate: 100
  },
  requisites: {
    account_number: string;
    bank_name: string;
    account_holder_name: string;
  };
  success_url: string;
  created_at: string;
  paid_at: string;
  confirmed_at: string;
};

