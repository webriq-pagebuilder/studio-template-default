import { Box, Card, Flex, Stack, Text } from "@sanity/ui"
import React from "react"
import { DocumentInspectorProps } from "sanity"
import resolveProductionUrl from "../resolvePreviewUrl"

export default function LaunchPreview(props: DocumentInspectorProps) {
  const { onClose } = props
  const [countdown, setCountdown] = React.useState(5)

  React.useEffect(() => {
    try {
      if (typeof window) {
        const doc = window.localStorage.getItem("currentDocument")
        const document = JSON.parse(doc)

        window.open(resolveProductionUrl(document), "_blank")
      }
    } catch (err) {}

    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1)

      if (countdown === 3) {
        clearInterval(timer)
      }
    }, 1000)

    setTimeout(() => {
      clearInterval(timer)
      onClose()
    }, 5000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Flex direction="column" height="fill" overflow="hidden">
      <Card flex={1} overflow="auto" padding={4}>
        <Stack space={4}>
          <Text size={2} weight="bold">
            Inline Editing Launched 🚀
          </Text>
          <Text size={1}>(This pane will automatically close in {countdown} seconds)</Text>
        </Stack>
      </Card>
    </Flex>
  )
}
