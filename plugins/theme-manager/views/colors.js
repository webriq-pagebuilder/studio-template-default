import React from "react";
import { Text, Card, Box, Grid } from "@sanity/ui";

const styles = {
  whitesmoke: {
    backgroundColor: "whitesmoke",
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

function Colors(props) {
  const { setStyle, data } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStyle((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Grid gap={4}>
      <Card style={styles.whitesmoke} padding={3}>
        <Box
          marginBottom={2}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ marginRight: 15 }}>
            <strong>Theme Color:</strong>
          </Text>
          <input
            type="color"
            min="1"
            max="100"
            name="themeColor"
            onChange={(e) => handleChange(e)}
            value={data.themeColor === "" ? "#059669" : data.themeColor}
          />
        </Box>
      </Card>
    </Grid>
  );
}

export default Colors;
