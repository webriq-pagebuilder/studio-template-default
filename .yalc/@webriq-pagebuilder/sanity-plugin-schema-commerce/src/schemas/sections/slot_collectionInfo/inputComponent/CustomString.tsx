/* eslint-disable react/display-name */
import { Stack, Card, Text } from "@sanity/ui";

// An input component which displays an instruction replacing fields for the dynamic product info section variants
export const CustomString = (props) => {
  return (
    <Stack padding={4} space={[3, 3, 4, 5]}>
      <Card>
        <Text style={{ fontWeight: "bold", color: "#0045d8" }}>
          This is a slot component - a placeholder for which the contents of
          this Collection will be shown in the page.
        </Text>
      </Card>
    </Stack>
  );
};
