import React, { useEffect, useState, useCallback } from "react"
import { Stack, TextArea, TextInput } from "@sanity/ui"
import { createClient } from "@sanity/client"
import { SANITY_STUDIO_API_PROJECT_ID, SANITY_STUDIO_DATASET } from "../../../src/config"
import { StringInputProps, defaultRenderInput, set, unset } from "sanity"
import { Card, Flex, Grid, Text } from "@sanity/ui"
import { FieldMember, MemberField, ObjectInputProps, useFormValue, ObjectInputMember } from "sanity"
import { IntentLink } from "sanity/router"

interface GlobalSeoData {
  defaultSeoTitle: string | null
  defaultSeoKeywords: string | null
  defaultSeoSynonyms: string | null
  defaultSeoDescription: string | null
  defaultSeoImage: {
    _type: "image"
    asset: {
      ref: string
      _type: string
    }
  } | null
  _createdAt?: string
  _id?: string
  _rev?: string
  _type?: string
  _updatedAt?: string
}

const INITIAL_GLOBAL_SEO_DATA: GlobalSeoData = {
  defaultSeoTitle: null,
  defaultSeoKeywords: null,
  defaultSeoSynonyms: null,
  defaultSeoDescription: null,
  defaultSeoImage: null,
}

export const CustomSeo = (props: ObjectInputProps) => {
  const {
    onChange,
    value,
    members,
    renderField,
    renderItem,
    renderInput,
    renderPreview,
    renderDefault,
  } = props

  const [globalSeoData, setGlobalSeoData] = useState<GlobalSeoData>(INITIAL_GLOBAL_SEO_DATA)

  // const imageData = "seoImage" in globalSeoData ? globalSeoData.seoImage : undefined

  const pageTitle = useFormValue(["title"]) as string

  const client = createClient({
    projectId: SANITY_STUDIO_API_PROJECT_ID,
    dataset: SANITY_STUDIO_DATASET,
    useCdn: false, // set to `false` to bypass the edge cache
    apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
  })

  const globalSeoTitle = members.find(
    (member): member is FieldMember => member.kind === "field" && member.name === "seoTitle"
  )
  const globalSeoKeywords = members.find(
    (member): member is FieldMember => member.kind === "field" && member.name === "seoKeywords"
  )
  const globalSeoSynonyms = members.find(
    (member): member is FieldMember => member.kind === "field" && member.name === "seoSynonyms"
  )
  const globalSeoDescription = members.find(
    (member): member is FieldMember => member.kind === "field" && member.name === "seoDescription"
  )
  const globalSeoImage = members.find(
    (member): member is FieldMember => member.kind === "field" && member.name === "seoImage"
  )

  const handleOnChange = useCallback(
    (e: any, inputName: string) => {
      const inputValue = e.target.value
      onChange(
        inputValue
          ? set({ ...value, [inputName]: inputValue })
          : set({ ...value, [inputName]: undefined })
      )
    },
    [onChange]
  )

  useEffect(() => {
    const getGlobalSeoData = async () => {
      const data = await client.fetch('*[_type == "defaultSeo"]')
      return data
    }

    const fetchData = async () => {
      const res: GlobalSeoData[] = await getGlobalSeoData()

      const globalData = res.find((data) => !data._id?.includes("drafts")) as
        | GlobalSeoData
        | undefined
      setGlobalSeoData(globalData ?? INITIAL_GLOBAL_SEO_DATA)
      console.log("fetching data from global sel")
      console.log("globalData", globalData)
    }

    fetchData()
  }, [])

  const customTitleRenderInput = () => (
    <>
      <TextInput
        placeholder={pageTitle || globalSeoData?.defaultSeoTitle || ""}
        value={value?.seoTitle}
        onChange={(e) => handleOnChange(e, "seoTitle")}
      />

      <Text style={{ marginTop: "12px", textAlign: "right" }} size={1} muted>
        {pageTitle && !value?.seoTitle ? (
          "Page title value will be used."
        ) : !pageTitle && !value?.seoTitle ? (
          <>
            No page title or value specified. The{" "}
            <IntentLink
              style={{ textDecoration: "none" }}
              intent="edit"
              params={{ id: "defaultSeo", type: "defaultSeo" }}
            >
              Default SEO
            </IntentLink>{" "}
            value will be used.
          </>
        ) : null}
      </Text>
    </>
  )
  const customKeywordsRenderInput = () => (
    <>
      <TextInput
        placeholder={globalSeoData?.defaultSeoKeywords || ""}
        value={value?.seoKeywords}
        onChange={(e) => handleOnChange(e, "seoKeywords")}
      />
      <Text style={{ marginTop: "12px", textAlign: "right" }} size={1} muted>
        {!value?.seoKeywords ? (
          <>
            No value specified. The{" "}
            <IntentLink
              style={{ textDecoration: "none" }}
              intent="edit"
              params={{ id: "defaultSeo", type: "defaultSeo" }}
            >
              Default SEO
            </IntentLink>{" "}
            value will be used.
          </>
        ) : null}
      </Text>
    </>
  )
  const customSynonymRenderInput = () => (
    <>
      <TextInput
        placeholder={globalSeoData?.defaultSeoSynonyms || ""}
        value={value?.seoSynonyms}
        onChange={(e) => handleOnChange(e, "seoSynonyms")}
      />
      <Text style={{ marginTop: "12px", textAlign: "right" }} size={1} muted>
        {!value?.seoSynonyms ? (
          <>
            No value specified. The{" "}
            <IntentLink
              style={{ textDecoration: "none" }}
              intent="edit"
              params={{ id: "defaultSeo", type: "defaultSeo" }}
            >
              Default SEO
            </IntentLink>{" "}
            value will be used.
          </>
        ) : null}
      </Text>
    </>
  )
  const customDescriptionRenderInput = () => (
    <>
      <TextArea
        placeholder={globalSeoData?.defaultSeoDescription || ""}
        value={value?.seoDescription}
        onChange={(e) => handleOnChange(e, "seoDescription")}
        rows={10}
      />
      <Text style={{ marginTop: "12px", textAlign: "right" }} size={1} muted>
        {!value?.seoDescription ? (
          <>
            No value specified. The{" "}
            <IntentLink
              style={{ textDecoration: "none" }}
              intent="edit"
              params={{ id: "defaultSeo", type: "defaultSeo" }}
            >
              Default SEO
            </IntentLink>{" "}
            value will be used.
          </>
        ) : null}
      </Text>
    </>
  )

  const renderProps = {
    renderInput,
    renderField,
    renderItem,
    renderPreview,
  }

  console.log("props", props)

  return (
    <Stack space={5}>
      {globalSeoTitle && (
        <MemberField
          member={globalSeoTitle}
          renderInput={customTitleRenderInput}
          renderField={renderField}
          renderItem={renderItem}
          renderPreview={renderPreview}
        />
      )}

      {globalSeoKeywords && (
        <MemberField
          member={globalSeoKeywords}
          renderInput={customKeywordsRenderInput}
          renderField={renderField}
          renderItem={renderItem}
          renderPreview={renderPreview}
        />
      )}

      {globalSeoSynonyms && (
        <MemberField
          member={globalSeoSynonyms}
          renderInput={customSynonymRenderInput}
          renderField={renderField}
          renderItem={renderItem}
          renderPreview={renderPreview}
        />
      )}

      {globalSeoDescription && (
        <MemberField
          member={globalSeoDescription}
          renderInput={customDescriptionRenderInput}
          renderField={renderField}
          renderItem={renderItem}
          renderPreview={renderPreview}
        />
      )}

      <ImageInput globalSeoImage={globalSeoImage} renderProps={renderProps} value={value} />
    </Stack>
  )
}

const ImageInput = ({ globalSeoImage, renderProps, value }) => {
  return (
    <Card>
      {globalSeoImage && <MemberField member={globalSeoImage} {...renderProps} />}{" "}
      <Text style={{ marginTop: "12px", textAlign: "right" }} size={1} muted>
        {!value?.seoImage ? (
          <>
            No value specified. The{" "}
            <IntentLink
              style={{ textDecoration: "none" }}
              intent="edit"
              params={{ id: "defaultSeo", type: "defaultSeo" }}
            >
              Default SEO
            </IntentLink>{" "}
            value will be used.
          </>
        ) : null}
      </Text>
    </Card>
  )
}
