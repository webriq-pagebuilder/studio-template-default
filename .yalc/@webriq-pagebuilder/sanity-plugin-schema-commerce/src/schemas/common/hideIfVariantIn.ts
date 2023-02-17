type DocumentProps = {
  document: {
    variant: string;
  };
};

export const hideIfVariantIn = (variants: string[]) => {
  return ({ document }: DocumentProps) => variants?.includes(document?.variant);
};
