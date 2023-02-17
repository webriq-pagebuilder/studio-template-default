import { default as default_2 } from "@webriq-pagebuilder/sanity-plugin-input-component-variants";
import { DocumentDefinition } from "sanity";
import { PreviewConfig } from "sanity";

declare const commerceSchema: {
  cartSectionVariant: {
    name: string;
    title: string;
    initialValue: () => {
      variant: string;
    };
    type: string;
    fields: {
      name: string;
      title: string;
      description: string;
      type: string;
      component: {
        input: default_2;
      };
      options: {
        list: {
          title: string;
          value: string;
          image: string;
        }[];
      };
    }[];
  };
  wishlistSectionVariant: {
    name: string;
    title: string;
    initialValue: () => {
      variant: string;
    };
    type: string;
    fields: {
      name: string;
      title: string;
      description: string;
      type: string;
      components: {
        input: default_2;
      };
      options: {
        list: {
          title: string;
          value: string;
          image: string;
        }[];
      };
    }[];
  };
  length: number;
  toString(): string;
  toLocaleString(): string;
  pop():
    | ({
        type: "document";
        name: "mainProduct";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                  media: string;
                },
                Record<"title" | "media", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "mainCollection";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                },
                Record<"title", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "productSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "collectionSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "cartPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "wishlistPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "searchPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | undefined;
  push(
    ...items: (
      | ({
          type: "document";
          name: "mainProduct";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    title: string;
                    media: string;
                  },
                  Record<"title" | "media", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "mainCollection";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    title: string;
                  },
                  Record<"title", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "productSettings";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "collectionSettings";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "cartPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "wishlistPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "searchPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
    )[]
  ): number;
  concat(
    ...items: ConcatArray<
      | ({
          type: "document";
          name: "mainProduct";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    title: string;
                    media: string;
                  },
                  Record<"title" | "media", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "mainCollection";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    title: string;
                  },
                  Record<"title", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "productSettings";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "collectionSettings";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "cartPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "wishlistPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "searchPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
    >[]
  ): (
    | ({
        type: "document";
        name: "mainProduct";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                  media: string;
                },
                Record<"title" | "media", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "mainCollection";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                },
                Record<"title", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "productSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "collectionSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "cartPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "wishlistPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "searchPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
  )[];
  concat(
    ...items: (
      | ({
          type: "document";
          name: "mainProduct";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    title: string;
                    media: string;
                  },
                  Record<"title" | "media", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "mainCollection";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    title: string;
                  },
                  Record<"title", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "productSettings";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "collectionSettings";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "cartPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "wishlistPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "searchPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ConcatArray<
          | ({
              type: "document";
              name: "mainProduct";
            } & Omit<DocumentDefinition, "preview"> & {
                preview?:
                  | PreviewConfig<
                      {
                        title: string;
                        media: string;
                      },
                      Record<"title" | "media", any>
                    >
                  | undefined;
              })
          | ({
              type: "document";
              name: "mainCollection";
            } & Omit<DocumentDefinition, "preview"> & {
                preview?:
                  | PreviewConfig<
                      {
                        title: string;
                      },
                      Record<"title", any>
                    >
                  | undefined;
              })
          | ({
              type: "document";
              name: "productSettings";
            } & Omit<DocumentDefinition, "preview"> & {
                preview?:
                  | PreviewConfig<
                      {
                        subtitle: string;
                      },
                      Record<"subtitle", any>
                    >
                  | undefined;
              })
          | ({
              type: "document";
              name: "collectionSettings";
            } & Omit<DocumentDefinition, "preview"> & {
                preview?:
                  | PreviewConfig<
                      {
                        subtitle: string;
                      },
                      Record<"subtitle", any>
                    >
                  | undefined;
              })
          | ({
              type: "document";
              name: "cartPage";
            } & Omit<DocumentDefinition, "preview"> & {
                preview?:
                  | PreviewConfig<
                      {
                        subtitle: string;
                      },
                      Record<"subtitle", any>
                    >
                  | undefined;
              })
          | ({
              type: "document";
              name: "wishlistPage";
            } & Omit<DocumentDefinition, "preview"> & {
                preview?:
                  | PreviewConfig<
                      {
                        subtitle: string;
                      },
                      Record<"subtitle", any>
                    >
                  | undefined;
              })
          | ({
              type: "document";
              name: "searchPage";
            } & Omit<DocumentDefinition, "preview"> & {
                preview?:
                  | PreviewConfig<
                      {
                        subtitle: string;
                      },
                      Record<"subtitle", any>
                    >
                  | undefined;
              })
        >
    )[]
  ): (
    | ({
        type: "document";
        name: "mainProduct";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                  media: string;
                },
                Record<"title" | "media", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "mainCollection";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                },
                Record<"title", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "productSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "collectionSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "cartPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "wishlistPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "searchPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
  )[];
  join(separator?: string | undefined): string;
  reverse(): (
    | ({
        type: "document";
        name: "mainProduct";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                  media: string;
                },
                Record<"title" | "media", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "mainCollection";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                },
                Record<"title", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "productSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "collectionSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "cartPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "wishlistPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "searchPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
  )[];
  shift():
    | ({
        type: "document";
        name: "mainProduct";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                  media: string;
                },
                Record<"title" | "media", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "mainCollection";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                },
                Record<"title", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "productSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "collectionSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "cartPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "wishlistPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "searchPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | undefined;
  slice(
    start?: number | undefined,
    end?: number | undefined
  ): (
    | ({
        type: "document";
        name: "mainProduct";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                  media: string;
                },
                Record<"title" | "media", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "mainCollection";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                },
                Record<"title", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "productSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "collectionSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "cartPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "wishlistPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "searchPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
  )[];
  sort(
    compareFn?:
      | ((
          a:
            | ({
                type: "document";
                name: "mainProduct";
              } & Omit<DocumentDefinition, "preview"> & {
                  preview?:
                    | PreviewConfig<
                        {
                          title: string;
                          media: string;
                        },
                        Record<"title" | "media", any>
                      >
                    | undefined;
                })
            | ({
                type: "document";
                name: "mainCollection";
              } & Omit<DocumentDefinition, "preview"> & {
                  preview?:
                    | PreviewConfig<
                        {
                          title: string;
                        },
                        Record<"title", any>
                      >
                    | undefined;
                })
            | ({
                type: "document";
                name: "productSettings";
              } & Omit<DocumentDefinition, "preview"> & {
                  preview?:
                    | PreviewConfig<
                        {
                          subtitle: string;
                        },
                        Record<"subtitle", any>
                      >
                    | undefined;
                })
            | ({
                type: "document";
                name: "collectionSettings";
              } & Omit<DocumentDefinition, "preview"> & {
                  preview?:
                    | PreviewConfig<
                        {
                          subtitle: string;
                        },
                        Record<"subtitle", any>
                      >
                    | undefined;
                })
            | ({
                type: "document";
                name: "cartPage";
              } & Omit<DocumentDefinition, "preview"> & {
                  preview?:
                    | PreviewConfig<
                        {
                          subtitle: string;
                        },
                        Record<"subtitle", any>
                      >
                    | undefined;
                })
            | ({
                type: "document";
                name: "wishlistPage";
              } & Omit<DocumentDefinition, "preview"> & {
                  preview?:
                    | PreviewConfig<
                        {
                          subtitle: string;
                        },
                        Record<"subtitle", any>
                      >
                    | undefined;
                })
            | ({
                type: "document";
                name: "searchPage";
              } & Omit<DocumentDefinition, "preview"> & {
                  preview?:
                    | PreviewConfig<
                        {
                          subtitle: string;
                        },
                        Record<"subtitle", any>
                      >
                    | undefined;
                }),
          b:
            | ({
                type: "document";
                name: "mainProduct";
              } & Omit<DocumentDefinition, "preview"> & {
                  preview?:
                    | PreviewConfig<
                        {
                          title: string;
                          media: string;
                        },
                        Record<"title" | "media", any>
                      >
                    | undefined;
                })
            | ({
                type: "document";
                name: "mainCollection";
              } & Omit<DocumentDefinition, "preview"> & {
                  preview?:
                    | PreviewConfig<
                        {
                          title: string;
                        },
                        Record<"title", any>
                      >
                    | undefined;
                })
            | ({
                type: "document";
                name: "productSettings";
              } & Omit<DocumentDefinition, "preview"> & {
                  preview?:
                    | PreviewConfig<
                        {
                          subtitle: string;
                        },
                        Record<"subtitle", any>
                      >
                    | undefined;
                })
            | ({
                type: "document";
                name: "collectionSettings";
              } & Omit<DocumentDefinition, "preview"> & {
                  preview?:
                    | PreviewConfig<
                        {
                          subtitle: string;
                        },
                        Record<"subtitle", any>
                      >
                    | undefined;
                })
            | ({
                type: "document";
                name: "cartPage";
              } & Omit<DocumentDefinition, "preview"> & {
                  preview?:
                    | PreviewConfig<
                        {
                          subtitle: string;
                        },
                        Record<"subtitle", any>
                      >
                    | undefined;
                })
            | ({
                type: "document";
                name: "wishlistPage";
              } & Omit<DocumentDefinition, "preview"> & {
                  preview?:
                    | PreviewConfig<
                        {
                          subtitle: string;
                        },
                        Record<"subtitle", any>
                      >
                    | undefined;
                })
            | ({
                type: "document";
                name: "searchPage";
              } & Omit<DocumentDefinition, "preview"> & {
                  preview?:
                    | PreviewConfig<
                        {
                          subtitle: string;
                        },
                        Record<"subtitle", any>
                      >
                    | undefined;
                })
        ) => number)
      | undefined
  ): (
    | ({
        type: "document";
        name: "mainProduct";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                  media: string;
                },
                Record<"title" | "media", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "mainCollection";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                },
                Record<"title", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "productSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "collectionSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "cartPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "wishlistPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "searchPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
  )[];
  splice(
    start: number,
    deleteCount?: number | undefined
  ): (
    | ({
        type: "document";
        name: "mainProduct";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                  media: string;
                },
                Record<"title" | "media", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "mainCollection";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                },
                Record<"title", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "productSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "collectionSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "cartPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "wishlistPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "searchPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
  )[];
  splice(
    start: number,
    deleteCount: number,
    ...items: (
      | ({
          type: "document";
          name: "mainProduct";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    title: string;
                    media: string;
                  },
                  Record<"title" | "media", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "mainCollection";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    title: string;
                  },
                  Record<"title", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "productSettings";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "collectionSettings";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "cartPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "wishlistPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "searchPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
    )[]
  ): (
    | ({
        type: "document";
        name: "mainProduct";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                  media: string;
                },
                Record<"title" | "media", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "mainCollection";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                },
                Record<"title", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "productSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "collectionSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "cartPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "wishlistPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "searchPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
  )[];
  unshift(
    ...items: (
      | ({
          type: "document";
          name: "mainProduct";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    title: string;
                    media: string;
                  },
                  Record<"title" | "media", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "mainCollection";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    title: string;
                  },
                  Record<"title", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "productSettings";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "collectionSettings";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "cartPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "wishlistPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "searchPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
    )[]
  ): number;
  indexOf(
    searchElement:
      | ({
          type: "document";
          name: "mainProduct";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    title: string;
                    media: string;
                  },
                  Record<"title" | "media", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "mainCollection";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    title: string;
                  },
                  Record<"title", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "productSettings";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "collectionSettings";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "cartPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "wishlistPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "searchPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          }),
    fromIndex?: number | undefined
  ): number;
  lastIndexOf(
    searchElement:
      | ({
          type: "document";
          name: "mainProduct";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    title: string;
                    media: string;
                  },
                  Record<"title" | "media", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "mainCollection";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    title: string;
                  },
                  Record<"title", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "productSettings";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "collectionSettings";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "cartPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "wishlistPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "searchPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          }),
    fromIndex?: number | undefined
  ): number;
  every<
    S extends
      | ({
          type: "document";
          name: "mainProduct";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    title: string;
                    media: string;
                  },
                  Record<"title" | "media", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "mainCollection";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    title: string;
                  },
                  Record<"title", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "productSettings";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "collectionSettings";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "cartPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "wishlistPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "searchPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
  >(
    predicate: (
      value:
        | ({
            type: "document";
            name: "mainProduct";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                      media: string;
                    },
                    Record<"title" | "media", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "mainCollection";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                    },
                    Record<"title", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "productSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "collectionSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "cartPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "wishlistPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "searchPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            }),
      index: number,
      array: (
        | ({
            type: "document";
            name: "mainProduct";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                      media: string;
                    },
                    Record<"title" | "media", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "mainCollection";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                    },
                    Record<"title", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "productSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "collectionSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "cartPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "wishlistPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "searchPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
      )[]
    ) => value is S,
    thisArg?: any
  ): this is S[];
  every(
    predicate: (
      value:
        | ({
            type: "document";
            name: "mainProduct";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                      media: string;
                    },
                    Record<"title" | "media", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "mainCollection";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                    },
                    Record<"title", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "productSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "collectionSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "cartPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "wishlistPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "searchPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            }),
      index: number,
      array: (
        | ({
            type: "document";
            name: "mainProduct";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                      media: string;
                    },
                    Record<"title" | "media", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "mainCollection";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                    },
                    Record<"title", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "productSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "collectionSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "cartPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "wishlistPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "searchPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
      )[]
    ) => unknown,
    thisArg?: any
  ): boolean;
  some(
    predicate: (
      value:
        | ({
            type: "document";
            name: "mainProduct";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                      media: string;
                    },
                    Record<"title" | "media", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "mainCollection";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                    },
                    Record<"title", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "productSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "collectionSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "cartPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "wishlistPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "searchPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            }),
      index: number,
      array: (
        | ({
            type: "document";
            name: "mainProduct";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                      media: string;
                    },
                    Record<"title" | "media", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "mainCollection";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                    },
                    Record<"title", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "productSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "collectionSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "cartPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "wishlistPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "searchPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
      )[]
    ) => unknown,
    thisArg?: any
  ): boolean;
  forEach(
    callbackfn: (
      value:
        | ({
            type: "document";
            name: "mainProduct";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                      media: string;
                    },
                    Record<"title" | "media", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "mainCollection";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                    },
                    Record<"title", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "productSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "collectionSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "cartPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "wishlistPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "searchPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            }),
      index: number,
      array: (
        | ({
            type: "document";
            name: "mainProduct";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                      media: string;
                    },
                    Record<"title" | "media", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "mainCollection";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                    },
                    Record<"title", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "productSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "collectionSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "cartPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "wishlistPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "searchPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
      )[]
    ) => void,
    thisArg?: any
  ): void;
  map<U>(
    callbackfn: (
      value:
        | ({
            type: "document";
            name: "mainProduct";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                      media: string;
                    },
                    Record<"title" | "media", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "mainCollection";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                    },
                    Record<"title", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "productSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "collectionSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "cartPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "wishlistPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "searchPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            }),
      index: number,
      array: (
        | ({
            type: "document";
            name: "mainProduct";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                      media: string;
                    },
                    Record<"title" | "media", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "mainCollection";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                    },
                    Record<"title", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "productSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "collectionSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "cartPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "wishlistPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "searchPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
      )[]
    ) => U,
    thisArg?: any
  ): U[];
  filter<
    S_1 extends
      | ({
          type: "document";
          name: "mainProduct";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    title: string;
                    media: string;
                  },
                  Record<"title" | "media", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "mainCollection";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    title: string;
                  },
                  Record<"title", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "productSettings";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "collectionSettings";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "cartPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "wishlistPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "searchPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
  >(
    predicate: (
      value:
        | ({
            type: "document";
            name: "mainProduct";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                      media: string;
                    },
                    Record<"title" | "media", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "mainCollection";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                    },
                    Record<"title", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "productSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "collectionSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "cartPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "wishlistPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "searchPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            }),
      index: number,
      array: (
        | ({
            type: "document";
            name: "mainProduct";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                      media: string;
                    },
                    Record<"title" | "media", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "mainCollection";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                    },
                    Record<"title", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "productSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "collectionSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "cartPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "wishlistPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "searchPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
      )[]
    ) => value is S_1,
    thisArg?: any
  ): S_1[];
  filter(
    predicate: (
      value:
        | ({
            type: "document";
            name: "mainProduct";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                      media: string;
                    },
                    Record<"title" | "media", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "mainCollection";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                    },
                    Record<"title", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "productSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "collectionSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "cartPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "wishlistPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "searchPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            }),
      index: number,
      array: (
        | ({
            type: "document";
            name: "mainProduct";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                      media: string;
                    },
                    Record<"title" | "media", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "mainCollection";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                    },
                    Record<"title", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "productSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "collectionSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "cartPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "wishlistPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "searchPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
      )[]
    ) => unknown,
    thisArg?: any
  ): (
    | ({
        type: "document";
        name: "mainProduct";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                  media: string;
                },
                Record<"title" | "media", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "mainCollection";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                },
                Record<"title", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "productSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "collectionSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "cartPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "wishlistPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "searchPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
  )[];
  reduce(
    callbackfn: (
      previousValue:
        | ({
            type: "document";
            name: "mainProduct";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                      media: string;
                    },
                    Record<"title" | "media", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "mainCollection";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                    },
                    Record<"title", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "productSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "collectionSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "cartPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "wishlistPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "searchPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            }),
      currentValue:
        | ({
            type: "document";
            name: "mainProduct";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                      media: string;
                    },
                    Record<"title" | "media", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "mainCollection";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                    },
                    Record<"title", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "productSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "collectionSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "cartPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "wishlistPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "searchPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            }),
      currentIndex: number,
      array: (
        | ({
            type: "document";
            name: "mainProduct";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                      media: string;
                    },
                    Record<"title" | "media", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "mainCollection";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                    },
                    Record<"title", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "productSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "collectionSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "cartPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "wishlistPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "searchPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
      )[]
    ) =>
      | ({
          type: "document";
          name: "mainProduct";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    title: string;
                    media: string;
                  },
                  Record<"title" | "media", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "mainCollection";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    title: string;
                  },
                  Record<"title", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "productSettings";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "collectionSettings";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "cartPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "wishlistPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "searchPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
  ):
    | ({
        type: "document";
        name: "mainProduct";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                  media: string;
                },
                Record<"title" | "media", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "mainCollection";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                },
                Record<"title", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "productSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "collectionSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "cartPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "wishlistPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "searchPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        });
  reduce(
    callbackfn: (
      previousValue:
        | ({
            type: "document";
            name: "mainProduct";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                      media: string;
                    },
                    Record<"title" | "media", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "mainCollection";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                    },
                    Record<"title", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "productSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "collectionSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "cartPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "wishlistPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "searchPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            }),
      currentValue:
        | ({
            type: "document";
            name: "mainProduct";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                      media: string;
                    },
                    Record<"title" | "media", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "mainCollection";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                    },
                    Record<"title", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "productSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "collectionSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "cartPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "wishlistPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "searchPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            }),
      currentIndex: number,
      array: (
        | ({
            type: "document";
            name: "mainProduct";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                      media: string;
                    },
                    Record<"title" | "media", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "mainCollection";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                    },
                    Record<"title", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "productSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "collectionSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "cartPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "wishlistPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "searchPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
      )[]
    ) =>
      | ({
          type: "document";
          name: "mainProduct";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    title: string;
                    media: string;
                  },
                  Record<"title" | "media", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "mainCollection";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    title: string;
                  },
                  Record<"title", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "productSettings";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "collectionSettings";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "cartPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "wishlistPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "searchPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          }),
    initialValue:
      | ({
          type: "document";
          name: "mainProduct";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    title: string;
                    media: string;
                  },
                  Record<"title" | "media", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "mainCollection";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    title: string;
                  },
                  Record<"title", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "productSettings";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "collectionSettings";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "cartPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "wishlistPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "searchPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
  ):
    | ({
        type: "document";
        name: "mainProduct";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                  media: string;
                },
                Record<"title" | "media", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "mainCollection";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                },
                Record<"title", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "productSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "collectionSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "cartPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "wishlistPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "searchPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        });
  reduce<U_1>(
    callbackfn: (
      previousValue: U_1,
      currentValue:
        | ({
            type: "document";
            name: "mainProduct";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                      media: string;
                    },
                    Record<"title" | "media", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "mainCollection";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                    },
                    Record<"title", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "productSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "collectionSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "cartPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "wishlistPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "searchPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            }),
      currentIndex: number,
      array: (
        | ({
            type: "document";
            name: "mainProduct";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                      media: string;
                    },
                    Record<"title" | "media", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "mainCollection";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                    },
                    Record<"title", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "productSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "collectionSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "cartPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "wishlistPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "searchPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
      )[]
    ) => U_1,
    initialValue: U_1
  ): U_1;
  reduceRight(
    callbackfn: (
      previousValue:
        | ({
            type: "document";
            name: "mainProduct";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                      media: string;
                    },
                    Record<"title" | "media", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "mainCollection";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                    },
                    Record<"title", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "productSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "collectionSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "cartPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "wishlistPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "searchPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            }),
      currentValue:
        | ({
            type: "document";
            name: "mainProduct";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                      media: string;
                    },
                    Record<"title" | "media", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "mainCollection";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                    },
                    Record<"title", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "productSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "collectionSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "cartPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "wishlistPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "searchPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            }),
      currentIndex: number,
      array: (
        | ({
            type: "document";
            name: "mainProduct";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                      media: string;
                    },
                    Record<"title" | "media", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "mainCollection";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                    },
                    Record<"title", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "productSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "collectionSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "cartPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "wishlistPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "searchPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
      )[]
    ) =>
      | ({
          type: "document";
          name: "mainProduct";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    title: string;
                    media: string;
                  },
                  Record<"title" | "media", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "mainCollection";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    title: string;
                  },
                  Record<"title", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "productSettings";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "collectionSettings";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "cartPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "wishlistPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "searchPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
  ):
    | ({
        type: "document";
        name: "mainProduct";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                  media: string;
                },
                Record<"title" | "media", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "mainCollection";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                },
                Record<"title", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "productSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "collectionSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "cartPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "wishlistPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "searchPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        });
  reduceRight(
    callbackfn: (
      previousValue:
        | ({
            type: "document";
            name: "mainProduct";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                      media: string;
                    },
                    Record<"title" | "media", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "mainCollection";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                    },
                    Record<"title", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "productSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "collectionSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "cartPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "wishlistPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "searchPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            }),
      currentValue:
        | ({
            type: "document";
            name: "mainProduct";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                      media: string;
                    },
                    Record<"title" | "media", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "mainCollection";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                    },
                    Record<"title", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "productSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "collectionSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "cartPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "wishlistPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "searchPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            }),
      currentIndex: number,
      array: (
        | ({
            type: "document";
            name: "mainProduct";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                      media: string;
                    },
                    Record<"title" | "media", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "mainCollection";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                    },
                    Record<"title", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "productSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "collectionSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "cartPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "wishlistPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "searchPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
      )[]
    ) =>
      | ({
          type: "document";
          name: "mainProduct";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    title: string;
                    media: string;
                  },
                  Record<"title" | "media", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "mainCollection";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    title: string;
                  },
                  Record<"title", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "productSettings";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "collectionSettings";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "cartPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "wishlistPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "searchPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          }),
    initialValue:
      | ({
          type: "document";
          name: "mainProduct";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    title: string;
                    media: string;
                  },
                  Record<"title" | "media", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "mainCollection";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    title: string;
                  },
                  Record<"title", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "productSettings";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "collectionSettings";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "cartPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "wishlistPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "searchPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
  ):
    | ({
        type: "document";
        name: "mainProduct";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                  media: string;
                },
                Record<"title" | "media", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "mainCollection";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                },
                Record<"title", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "productSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "collectionSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "cartPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "wishlistPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "searchPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        });
  reduceRight<U_2>(
    callbackfn: (
      previousValue: U_2,
      currentValue:
        | ({
            type: "document";
            name: "mainProduct";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                      media: string;
                    },
                    Record<"title" | "media", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "mainCollection";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                    },
                    Record<"title", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "productSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "collectionSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "cartPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "wishlistPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "searchPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            }),
      currentIndex: number,
      array: (
        | ({
            type: "document";
            name: "mainProduct";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                      media: string;
                    },
                    Record<"title" | "media", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "mainCollection";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                    },
                    Record<"title", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "productSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "collectionSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "cartPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "wishlistPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "searchPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
      )[]
    ) => U_2,
    initialValue: U_2
  ): U_2;
  find<
    S_2 extends
      | ({
          type: "document";
          name: "mainProduct";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    title: string;
                    media: string;
                  },
                  Record<"title" | "media", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "mainCollection";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    title: string;
                  },
                  Record<"title", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "productSettings";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "collectionSettings";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "cartPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "wishlistPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "searchPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
  >(
    predicate: (
      this: void,
      value:
        | ({
            type: "document";
            name: "mainProduct";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                      media: string;
                    },
                    Record<"title" | "media", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "mainCollection";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                    },
                    Record<"title", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "productSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "collectionSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "cartPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "wishlistPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "searchPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            }),
      index: number,
      obj: (
        | ({
            type: "document";
            name: "mainProduct";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                      media: string;
                    },
                    Record<"title" | "media", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "mainCollection";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                    },
                    Record<"title", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "productSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "collectionSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "cartPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "wishlistPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "searchPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
      )[]
    ) => value is S_2,
    thisArg?: any
  ): S_2 | undefined;
  find(
    predicate: (
      value:
        | ({
            type: "document";
            name: "mainProduct";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                      media: string;
                    },
                    Record<"title" | "media", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "mainCollection";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                    },
                    Record<"title", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "productSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "collectionSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "cartPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "wishlistPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "searchPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            }),
      index: number,
      obj: (
        | ({
            type: "document";
            name: "mainProduct";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                      media: string;
                    },
                    Record<"title" | "media", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "mainCollection";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                    },
                    Record<"title", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "productSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "collectionSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "cartPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "wishlistPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "searchPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
      )[]
    ) => unknown,
    thisArg?: any
  ):
    | ({
        type: "document";
        name: "mainProduct";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                  media: string;
                },
                Record<"title" | "media", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "mainCollection";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                },
                Record<"title", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "productSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "collectionSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "cartPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "wishlistPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "searchPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | undefined;
  findIndex(
    predicate: (
      value:
        | ({
            type: "document";
            name: "mainProduct";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                      media: string;
                    },
                    Record<"title" | "media", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "mainCollection";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                    },
                    Record<"title", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "productSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "collectionSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "cartPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "wishlistPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "searchPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            }),
      index: number,
      obj: (
        | ({
            type: "document";
            name: "mainProduct";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                      media: string;
                    },
                    Record<"title" | "media", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "mainCollection";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                    },
                    Record<"title", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "productSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "collectionSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "cartPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "wishlistPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "searchPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
      )[]
    ) => unknown,
    thisArg?: any
  ): number;
  fill(
    value:
      | ({
          type: "document";
          name: "mainProduct";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    title: string;
                    media: string;
                  },
                  Record<"title" | "media", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "mainCollection";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    title: string;
                  },
                  Record<"title", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "productSettings";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "collectionSettings";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "cartPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "wishlistPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "searchPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          }),
    start?: number | undefined,
    end?: number | undefined
  ): (
    | ({
        type: "document";
        name: "mainProduct";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                  media: string;
                },
                Record<"title" | "media", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "mainCollection";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                },
                Record<"title", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "productSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "collectionSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "cartPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "wishlistPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "searchPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
  )[];
  copyWithin(
    target: number,
    start: number,
    end?: number | undefined
  ): (
    | ({
        type: "document";
        name: "mainProduct";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                  media: string;
                },
                Record<"title" | "media", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "mainCollection";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                },
                Record<"title", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "productSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "collectionSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "cartPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "wishlistPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "searchPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
  )[];
  entries(): IterableIterator<
    [
      number,
      (
        | ({
            type: "document";
            name: "mainProduct";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                      media: string;
                    },
                    Record<"title" | "media", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "mainCollection";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                    },
                    Record<"title", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "productSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "collectionSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "cartPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "wishlistPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "searchPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
      )
    ]
  >;
  keys(): IterableIterator<number>;
  values(): IterableIterator<
    | ({
        type: "document";
        name: "mainProduct";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                  media: string;
                },
                Record<"title" | "media", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "mainCollection";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                },
                Record<"title", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "productSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "collectionSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "cartPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "wishlistPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "searchPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
  >;
  includes(
    searchElement:
      | ({
          type: "document";
          name: "mainProduct";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    title: string;
                    media: string;
                  },
                  Record<"title" | "media", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "mainCollection";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    title: string;
                  },
                  Record<"title", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "productSettings";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "collectionSettings";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "cartPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "wishlistPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          })
      | ({
          type: "document";
          name: "searchPage";
        } & Omit<DocumentDefinition, "preview"> & {
            preview?:
              | PreviewConfig<
                  {
                    subtitle: string;
                  },
                  Record<"subtitle", any>
                >
              | undefined;
          }),
    fromIndex?: number | undefined
  ): boolean;
  flatMap<U_3, This = undefined>(
    callback: (
      this: This,
      value:
        | ({
            type: "document";
            name: "mainProduct";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                      media: string;
                    },
                    Record<"title" | "media", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "mainCollection";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                    },
                    Record<"title", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "productSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "collectionSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "cartPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "wishlistPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "searchPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            }),
      index: number,
      array: (
        | ({
            type: "document";
            name: "mainProduct";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                      media: string;
                    },
                    Record<"title" | "media", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "mainCollection";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      title: string;
                    },
                    Record<"title", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "productSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "collectionSettings";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "cartPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "wishlistPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
        | ({
            type: "document";
            name: "searchPage";
          } & Omit<DocumentDefinition, "preview"> & {
              preview?:
                | PreviewConfig<
                    {
                      subtitle: string;
                    },
                    Record<"subtitle", any>
                  >
                | undefined;
            })
      )[]
    ) => U_3 | readonly U_3[],
    thisArg?: This | undefined
  ): U_3[];
  flat<A, D extends number = 1>(
    this: A,
    depth?: D | undefined
  ): FlatArray<A, D>[];
  at(index: number):
    | ({
        type: "document";
        name: "mainProduct";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                  media: string;
                },
                Record<"title" | "media", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "mainCollection";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                },
                Record<"title", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "productSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "collectionSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "cartPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "wishlistPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "searchPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | undefined;
  [Symbol.iterator](): IterableIterator<
    | ({
        type: "document";
        name: "mainProduct";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                  media: string;
                },
                Record<"title" | "media", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "mainCollection";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  title: string;
                },
                Record<"title", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "productSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "collectionSettings";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "cartPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "wishlistPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
    | ({
        type: "document";
        name: "searchPage";
      } & Omit<DocumentDefinition, "preview"> & {
          preview?:
            | PreviewConfig<
                {
                  subtitle: string;
                },
                Record<"subtitle", any>
              >
            | undefined;
        })
  >;
  [Symbol.unscopables](): {
    copyWithin: boolean;
    entries: boolean;
    fill: boolean;
    find: boolean;
    findIndex: boolean;
    keys: boolean;
    values: boolean;
  };
  allProducts: {
    type: "document";
    name: string;
  } & Omit<DocumentDefinition, "preview"> & {
      preview?:
        | PreviewConfig<
            {
              label: string;
              variant: string;
            },
            Record<"label" | "variant", any>
          >
        | undefined;
    };
  featuredProducts: {
    type: "document";
    name: string;
  } & Omit<DocumentDefinition, "preview"> & {
      preview?:
        | PreviewConfig<
            {
              label: string;
              variant: string;
            },
            Record<"label" | "variant", any>
          >
        | undefined;
    };
  pages_productInfo: {
    type: "document";
    name: string;
  } & Omit<DocumentDefinition, "preview"> & {
      preview?:
        | PreviewConfig<
            {
              label: string;
              variant: string;
            },
            Record<"label" | "variant", any>
          >
        | undefined;
    };
  slot_productInfo: {
    type: "document";
    name: "slotProductInfo";
  } & Omit<DocumentDefinition, "preview"> & {
      preview?:
        | PreviewConfig<Record<string, string>, Record<never, any>>
        | undefined;
    };
  slot_collectionInfo: {
    type: "document";
    name: "slotCollectionInfo";
  } & Omit<DocumentDefinition, "preview"> & {
      preview?:
        | PreviewConfig<Record<string, string>, Record<never, any>>
        | undefined;
    };
  slotCart: {
    type: "document";
    name: "slotCart";
  } & Omit<DocumentDefinition, "preview"> & {
      preview?:
        | PreviewConfig<Record<string, string>, Record<never, any>>
        | undefined;
    };
  slotWishlist: {
    type: "document";
    name: "slotWishlist";
  } & Omit<DocumentDefinition, "preview"> & {
      preview?:
        | PreviewConfig<Record<string, string>, Record<never, any>>
        | undefined;
    };
};
export default commerceSchema;

export {};
