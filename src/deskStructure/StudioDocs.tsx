import { Box, Flex, Stack, Text } from "@sanity/ui"
import packageJson from "../../package.json"
import { GoLinkExternal } from "react-icons/go"

const CANVA_WSTUDIO_PRESENTATION =
  process.env.NEXT_PUBLIC_CANVA_WSTUDIO_PRESENTATION ||
  "https://www.canva.com/design/DAFGKT1MdX4/view?embed#20"

export const StudioDocs = () => {
  return (
    <>
      <Stack padding={4} space={2}>
        <Text size={2}>
          WebriQ Studio Version: <strong>{packageJson.version}</strong>
        </Text>
        <a
          href={`https://github.com/webriq-pagebuilder/studio-template-default/releases/tag/${packageJson.version}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", gap: 5 }}
        >
          View Changelog <GoLinkExternal />
        </a>
      </Stack>

      <iframe
        src={CANVA_WSTUDIO_PRESENTATION}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
        }}
        frameBorder={0}
        allowFullScreen={true}
      ></iframe>
    </>
  )
}
