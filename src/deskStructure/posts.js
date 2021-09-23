import S from "@sanity/desk-tool/structure-builder";

export default S.listItem()
  .title("Blog")
  .child(
    S.list()
      .title("Blog")
      .items([
        S.listItem()
          .title("Posts")
          .child(S.documentTypeList("post").title("All Posts")),
        S.listItem()
          .title("Categories")
          .child(S.documentTypeList("category").title("Categories")),
        S.listItem()
          .title("Authors")
          .child(S.documentTypeList("author").title("Authors")),
      ])
  );
