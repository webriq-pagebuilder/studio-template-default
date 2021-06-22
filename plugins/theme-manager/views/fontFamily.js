import React from "react";
import { Text, TextInput, Box, Button, Grid, Dialog } from "@sanity/ui";
function FontFamily({
  setOpenImportDialog,
  setStyle,
  handleClickProceed,
  data,
}) {
  const handleChange = (e) => {
    const { value } = e.target;
    let result = value?.split(",").concat(data.fontFamilies);
    setStyle(result);
  };
  return (
    <Dialog
      header="Import Font Family"
      id="dialog-example"
      onClose={() => setOpenImportDialog(false)}
      zOffset={1000}
      width={1}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Grid columns={2}>
        <Box>
          <Box padding={4}>
            <Text style={{ fontSize: "12px", marginBottom: 10 }}>
              You can add Font Family seperated by comma.
            </Text>
            <TextInput
              placeholder="e.g. sans-serif, cursive"
              name="fontFamilies"
              onChange={(e) => handleChange(e)}
            />
          </Box>
          <Box
            style={{
              padding: 5,
              display: "flex",
              justifyContent: "flex-start",
              marginBottom: 10,
            }}
          >
            <Button
              text="Add Font"
              mode="default"
              type="button"
              tone="primary"
              onClick={handleClickProceed}
              style={{ marginRight: 10, marginLeft: 10, cursor: "pointer" }}
            />
            <Button
              text="Cancel"
              mode="default"
              type="button"
              style={{ cursor: "pointer" }}
              tone="critical"
              onClick={() => setOpenImportDialog(false)}
            />
          </Box>
        </Box>
        <Box padding={4} style={{ borderLeft: "1px solid lightgray" }}>
          <Text style={{ fontSize: "14px" }}>
            <strong>Font Family Added</strong>
          </Text>
          {data?.fontFamilies?.map((font) => (
            <Text key={font} style={{ fontSize: "14px", marginTop: 12 }}>
              - {font}
            </Text>
          ))}
        </Box>
      </Grid>
    </Dialog>
  );
}

export default FontFamily;
