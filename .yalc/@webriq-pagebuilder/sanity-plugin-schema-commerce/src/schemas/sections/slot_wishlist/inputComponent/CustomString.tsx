import { Stack, Card, Text } from "@sanity/ui";

// An input component which displays an instruction replacing fields for the dynamic product info section variants
export const CustomString = (props) => {
  return (
    <Stack padding={4} space={[3, 3, 4, 5]}>
      <Card>
        <Text style={{ fontWeight: "bold", color: "#0045d8" }}>
          This is a slot component where the wishlist items or favorite products
          will be displayed to the page using Ecwid functions.
        </Text>
      </Card>
    </Stack>
  );
};