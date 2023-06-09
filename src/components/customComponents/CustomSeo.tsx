import React, { useEffect, useState, useCallback } from "react"
import { Stack, TextArea, TextInput } from "@sanity/ui"
import { createClient } from "@sanity/client"
import { SANITY_STUDIO_API_PROJECT_ID, SANITY_STUDIO_DATASET } from "../../../src/config"
import { StringInputProps, defaultRenderInput, set, unset } from "sanity"
import { Card, Flex, Grid, Text } from "@sanity/ui"
import { FieldMember, MemberField, ObjectInputProps, useFormValue } from "sanity"

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
  const { onChange, value, members, renderField, renderItem, renderInput, renderPreview } = props

  const [globalSeoData, setGlobalSeoData] = useState<GlobalSeoData>(INITIAL_GLOBAL_SEO_DATA)
  // const imageData = "seoImage" in globalSeoData ? globalSeoData.seoImage : undefined

  const pageTitle = useFormValue(["title"]) as string

  const client = createClient({
    projectId: SANITY_STUDIO_API_PROJECT_ID,
    dataset: SANITY_STUDIO_DATASET,
    useCdn: true, // set to `false` to bypass the edge cache
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
    }

    fetchData()
  }, [])

  const customTitleRenderInput = () => (
    <TextInput
      placeholder={pageTitle || globalSeoData?.defaultSeoTitle || ""}
      value={value?.seoTitle}
      onChange={(e) => handleOnChange(e, "seoTitle")}
    />
  )
  const customKeywordsRenderInput = () => (
    <TextInput
      placeholder={globalSeoData?.defaultSeoKeywords || ""}
      value={value?.seoKeywords}
      onChange={(e) => handleOnChange(e, "seoKeywords")}
    />
  )
  const customSynonymRenderInput = () => (
    <TextInput
      placeholder={globalSeoData?.defaultSeoSynonyms || ""}
      value={value?.seoSynonyms}
      onChange={(e) => handleOnChange(e, "seoSynonyms")}
    />
  )
  const customDescriptionRenderInput = () => (
    <TextArea
      placeholder={globalSeoData?.defaultSeoDescription || ""}
      value={value?.seoDescription}
      onChange={(e) => handleOnChange(e, "seoDescription")}
      rows={10}
    />
  )

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

      {globalSeoImage && (
        <MemberField
          member={globalSeoImage}
          renderInput={renderInput}
          renderField={renderField}
          renderItem={renderItem}
          renderPreview={renderPreview}
        />
      )}
    </Stack>
  )
}
