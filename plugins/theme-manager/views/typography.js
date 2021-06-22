import React from "react";
import { Text, Card, Stack, Select, Box, Grid } from "@sanity/ui";

const styles = {
  transparent: {
    backgroundColor: "transparent",
  },
  borderBottom: {
    borderBottom: "1px solid #DDE0E7",
    paddingTop: "10px",
  },
  spacing: {
    marginRight: "7px",
    cursor: "pointer",
  },
};

function Typography(props) {
  const { setStyle, data } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStyle((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Grid gap={4}>
      <Stack padding={5} space={5} style={{ backgroundColor: "whitesmoke" }}>
        <Card style={styles.transparent}>
          <Box marginBottom={2}>
            <Text>
              <strong>Heading Font Family</strong>
            </Text>
          </Box>
          <Stack>
            <Select
              fontSize={2}
              padding={2}
              space={2}
              onChange={(e) => handleChange(e)}
              name="headingFontFamily"
              value={
                data.headingFontFamily === ""
                  ? "sans-serif"
                  : data.headingFontFamily
              }
            >
              {data?.fontFamilies?.map((fontFamily) => {
                const text = fontFamily.startsWith(" ");
                return (
                  <option value={fontFamily} key={fontFamily}>
                    {text
                      ? fontFamily.replace(" ", "").charAt(0).toUpperCase() +
                        fontFamily.slice(2)
                      : fontFamily.charAt(0).toUpperCase() +
                        fontFamily.slice(1)}
                  </option>
                );
              })}
            </Select>
          </Stack>
        </Card>
        <Card style={styles.transparent}>
          <Box
            marginBottom={2}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Text>
              <strong>Heading Font Size: </strong>
            </Text>
            <Text>
              <i style={{ fontSize: 12 }}>
                {data.headingFontSize === "" ? "36" : data.headingFontSize}px
              </i>
            </Text>
          </Box>
          <Stack marginBottom={20}>
            <input
              type="range"
              min="1"
              max="100"
              name="headingFontSize"
              onChange={(e) => handleChange(e)}
              value={data.headingFontSize === "" ? "35" : data.headingFontSize}
              style={{ outline: "none" }}
            />
          </Stack>
        </Card>
      </Stack>

      <Stack padding={5} space={5} style={{ backgroundColor: "whitesmoke" }}>
        <Card style={styles.transparent}>
          <Box marginBottom={2}>
            <Text>
              <strong>Description Font Family</strong>
            </Text>
          </Box>
          <Stack>
            <Select
              fontSize={2}
              padding={2}
              space={2}
              onChange={(e) => handleChange(e)}
              name="descriptionFontFamily"
              value={
                data.descriptionFontFamily === ""
                  ? "sans-serif"
                  : data.descriptionFontFamily
              }
            >
              {data?.fontFamilies?.map((fontFamily) => {
                const text = fontFamily.startsWith(" ");
                return (
                  <option value={fontFamily} key={fontFamily}>
                    {text
                      ? fontFamily.replace(" ", "").charAt(0).toUpperCase() +
                        fontFamily.slice(2)
                      : fontFamily.charAt(0).toUpperCase() +
                        fontFamily.slice(1)}
                  </option>
                );
              })}
            </Select>
          </Stack>
        </Card>
        <Card style={styles.transparent}>
          <Box
            marginBottom={2}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Text>
              <strong>Description Font Size: </strong>
            </Text>
            <Text>
              <i style={{ fontSize: 12 }}>
                {data.descriptionFontSize === ""
                  ? "14"
                  : data.descriptionFontSize}
                px
              </i>
            </Text>
          </Box>
          <Stack marginBottom={20}>
            <input
              type="range"
              min="1"
              max="100"
              name="descriptionFontSize"
              onChange={(e) => handleChange(e)}
              value={
                data.descriptionFontSize === ""
                  ? "14"
                  : data.descriptionFontSize
              }
              style={{ outline: "none" }}
            />
          </Stack>
        </Card>
      </Stack>
    </Grid>
  );
}

export default Typography;
