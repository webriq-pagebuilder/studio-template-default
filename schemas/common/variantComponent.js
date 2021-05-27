import React from "react"
import PropTypes from "prop-types"
import PatchEvent, { set, unset } from "part:@sanity/form-builder/patch-event"
import { withDocument } from "part:@sanity/form-builder"
import FormField from "part:@sanity/components/formfields/default"
import { Flex, Card, Heading, Grid, Button, Text, Stack } from "@sanity/ui"
import { OlistIcon } from "@sanity/icons"

const createPatchFrom = value =>
  PatchEvent.from(value === "" ? unset() : set(value))

class VariantComponent extends React.PureComponent {
  static propTypes = {
    type: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    }).isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  }

  variant = React.createRef()

  render() {
    const { type, value, onChange } = this.props

    const currentOption = type.options.list.find(
      option => option.value === value
    )

    return (
      // Use FormField if you want title and description rendered like any other input field
      <FormField label={type.title} description={type.description}>
        {!value && (
          <Grid columns={[1, 1, 1, 1]} gap={[2, 3, 4, 5]}>
            {type.options.list.map(option => {
              return (
                <Card
                  key={option?.title}
                  padding={[2, 3, 4]}
                  radius={2}
                  shadow={1}
                  onClick={() => onChange(createPatchFrom(option.value))}
                  style={{ cursor: "pointer" }}
                >
                  <Stack space={[2, 2, 2, 3]}>
                    <Card marginBottom={15}>
                      <img src={option?.image} style={{ maxWidth: `100%` }} />
                    </Card>
                    <Heading as="h3" size={1} weight="300">
                      {option?.title}
                    </Heading>
                    {option?.description && (
                      <Text muted>{option?.description}</Text>
                    )}
                  </Stack>
                </Card>
              )
            })}
          </Grid>
        )}
        {value && (
          <Flex>
            <Card
              key={currentOption?.title}
              padding={[2, 3, 4]}
              radius={2}
              shadow={1}
              flex={[1, 2, 3]}
            >
              <Stack space={[3, 3, 4, 5]}>
                <img src={currentOption?.image} style={{ maxWidth: `100%` }} />
              </Stack>
            </Card>
            <Card flex={1} marginLeft={[2, 2, 3, 4]}>
              <Stack space={[2, 2, 3, 3]}>
                <Heading as="h3" size={1} weight="300">
                  {currentOption?.title}
                </Heading>
                {currentOption?.description && (
                  <Text muted>{currentOption?.description}</Text>
                )}
                <Button
                  icon={OlistIcon}
                  text="Choose another..."
                  mode="default"
                  tone="primary"
                  onClick={() => onChange(createPatchFrom(""))}
                />
              </Stack>
            </Card>
          </Flex>
        )}
      </FormField>
    )
  }
}

export default withDocument(VariantComponent)
