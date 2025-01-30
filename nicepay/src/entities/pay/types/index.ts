export type DetailsPaymentType = {
  price: string;
  transferToWhere: string;
  imgCountry: string;
  detailsPay: string;
};

export type CollapseCustomTypes = {
  titleCollapse: string;
  method_1: string;
  method_2: string;
  method_3: string;
};

export type ContentAddFileTypes = {
  paymentProof: FileList;
  selectedClientName: string;
  selectedClientAmount: string;
};

export type DetailsPaymentInfoProps = {
  text: string;
  describe?: string;
  warning?: string
};

