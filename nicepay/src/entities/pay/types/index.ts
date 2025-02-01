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
  url: string,
  tag: string,
  name: string
}
