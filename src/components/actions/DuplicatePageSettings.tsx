import React, { useState } from "react";
import {
  Badge,
  Box, 
  Button, 
  Card, 
  Flex,
  Inline, 
  Stack, 
  Switch, 
  Text, 
  TextInput, 
} from "@sanity/ui";
import { ComposeIcon, ArrowLeftIcon, RestoreIcon, CloseCircleIcon } from "@sanity/icons"
import { ButtonWithTooltip, SearchBar } from ".";


export default function DuplicatePageSettings({ page, variants, setValues, setDialogOpen }) {
  let variantStr = "", sectionVariant = "Variant not selected";

  const [duplicateSections, setDuplicateSections] = useState(page?.sections);
  const [pageTitle, setPageTitle] = useState(page?.title || page?.name);

  // FEATURE BUTTONS: NEW | EXCLUDE | REVERT REFERENCES
  const handleFeatureButtons = (feature: "new" | "exclude" | "revert", position: number) => {
    const updated = duplicateSections?.map((section, index) => {
      if(index !== position) {
        return section; // no change
      } else {
        if(feature === "new") {
          return {
            ...section,
            current: !section.current
          }
        } else if(feature === "exclude") {
          return {
            ...section,
            include: !section?.include,
            isEditing: false,
          }
        } else if(feature === "revert") {
          return {
            ...page?.sections[position],
            current: true,
            include: true,
            replaced: false,
            isEditing: false,
          };
        } else {
          console.log("[ERROR] Supported features: 'new' | 'exclude' | 'revert' only")
        }
      }
    });

    setDuplicateSections(updated);
    setValues((prev) => ({...prev, sections: updated, dialogFn: setDialogOpen}));
  }

  // EDIT REFERENCE
  const handleEditReferenceBtn = (value: any, position) => {
    const updated = duplicateSections?.map((section, index) => {
      if(index !== position) {
        return section; // no change
      } else {
        if(value) {
          // return new shape
          const { replaced, isEditing, ...rest } = value;

          return duplicateSections[index] = { 
            replaced: true, 
            isEditing: false, 
            ...rest 
          };
        }

        return {
          ...section,
          isEditing: !section?.isEditing,
        };
      }
    });

    setDuplicateSections(updated);
    setValues((prev) => ({...prev, sections: updated, dialogFn: setDialogOpen}));
  }

  return (
    <Card padding={2}>
      <Stack space={2}>
        <Text size={1} weight="bold">
          Title
        </Text>
        <div className="relative">
          <TextInput
            fontSize={2}
            value={pageTitle}
            padding={[3, 3, 4]}
            placeholder="Document title"
            onChange={(event) => {
              setPageTitle(event.target.value)
              setValues((prev) => ({...prev, title: event.target.value}))
            }}
            radius={2} 
            required
          />
          {pageTitle !== (page?.title || page?.name)  && (
            <ButtonWithTooltip toolTipText="Revert">
              <button
                style={{ 
                  position: "absolute",
                  border: 0,
                  background: "transparent",
                  top: 45,
                  right: 30,
                  zIndex: 99,
                  marginTop: "12px",
                }}
                disabled={pageTitle === page?.title || page?.name}
                onClick={() => setPageTitle(page?.title || page?.name)}
              >
                <RestoreIcon style={{ fontSize: 24 }} />
              </button>
            </ButtonWithTooltip>
          )}
        </div>
      </Stack>
      <Box paddingY={4}>
        <Stack space={2}>
          <Text size={1} weight="bold">
            Sections
          </Text>
          {duplicateSections?.map((section, index) => {
            if (section?.variant) {
              variantStr =
                section?.variant?.charAt(0).toUpperCase() +
                section?.variant?.substr(1, section?.variant.length - 2) +
                section?.variant?.charAt(section?.variant.length - 1).toUpperCase() // the first and last letters of variant to uppercase
    
              sectionVariant = variantStr?.replace(/_/g, " ") // replace underscore (_) with whitespace
            }

            return (
              <React.Fragment key={section?._id}>
                <Card 
                  padding={3} 
                  radius={2} 
                  shadow={1} 
                  style={{
                    backgroundColor: !section?.include && "#e5e7ebb5"
                  }}
                >
                  {section?.isEditing ? (
                    <div style={{ display: "flex", flex: "wrap", justifyContent: "space-between" }}>
                      {/* Cancel button + search bar + feature buttons (restore and/or exclude) */}
                      <div style={{ display: "flex", flex: "wrap", width: "75%" }}>
                        <ButtonWithTooltip toolTipText="Cancel">
                          <button 
                            onClick={() => handleEditReferenceBtn(null, index)}
                            style={{
                              border: 0,
                              background: "transparent",
                            }}
                          >
                            <ArrowLeftIcon style={{ fontSize: 24 }} />
                          </button>
                        </ButtonWithTooltip>
                        {/* Search bar to select variant */}
                        <Box padding={2} style={{ width: "80%" }}>
                          <SearchBar 
                            searchItems={variants?.filter((variant) => 
                              variant?._type === section?._type && variant?.label !== section?.variants?.label
                            )} 
                            onClickHandler={(value) => handleEditReferenceBtn(value, index)}
                          />
                        </Box>
                      </div>
                      <Flex>
                        {/* Revert changes button */}
                        {(section?.replaced || !section?.include) && (
                          <ButtonWithTooltip toolTipText="Revert">
                            <button 
                              onClick={() => handleFeatureButtons("revert", index)}
                              style={{
                                border: 0,
                                background: "transparent",
                              }}
                            >
                              <RestoreIcon style={{ fontSize: 24 }} />
                            </button>
                          </ButtonWithTooltip>
                        )}
                        {/* Exclude reference button */}
                        <ButtonWithTooltip toolTipText="Exclude">
                          <button 
                            onClick={() => handleFeatureButtons("exclude", index)}
                            style={{
                              border: 0,
                              background: "transparent",
                              color: "maroon"
                            }}
                          >
                            <CloseCircleIcon style={{ fontSize: 24 }} />
                          </button>
                        </ButtonWithTooltip>
                      </Flex>
                    </div>
                  ) : (
                    <>
                      <Flex justify="space-between">
                        <Inline className="showBtn" space={2} padding={2}>
                          <Text style={{ paddingTop: 7, minHeight: "22px" }}>
                            {section?.label ?? "Untitled document"}
                          </Text>
                          {!section?.include ? (
                            <Badge mode="outline" tone="critical">Not included</Badge> 
                          ) : (
                            !section?.current && (
                              <Badge mode="outline" tone="primary">New Copy</Badge>
                            )
                          )}
                          {/* Replace reference button */}
                          {section?.include && (
                            <ButtonWithTooltip toolTipText="Edit">
                              <button 
                                className={`${!section?.isEditing && "hide"}`}
                                onClick={() => handleEditReferenceBtn(null, index)}
                                style={{
                                  border: 0,
                                  background: "transparent",
                                  color: "#0045d8"
                                }}
                              >
                                <ComposeIcon style={{ fontSize: 24 }} />
                              </button>
                            </ButtonWithTooltip>
                          )}
                          {/* Revert changes button */}
                          {!section?.isEditing && !section?.include && (
                            <ButtonWithTooltip toolTipText="Revert">
                              <button 
                                onClick={() => handleFeatureButtons("revert", index)}
                                style={{
                                  border: 0,
                                  background: "transparent",
                                }}
                              >
                                <RestoreIcon style={{ fontSize: 24 }} />
                              </button>
                            </ButtonWithTooltip>
                          )}
                        </Inline>
                        {/* Reference toggle button */}
                        <Box padding={3}>
                          <ButtonWithTooltip toolTipText={!duplicateSections[index]?.current ? "Use Current" : "New Copy"}>
                            <Switch 
                              id={`${section?._type}-${index + 1}`}
                              name={`${section?.label} include`}
                              value={section?._type}
                              disabled={!section?.include}
                              checked={!duplicateSections[index]?.current}
                              onChange={() => handleFeatureButtons("new", index)}
                            />
                          </ButtonWithTooltip>
                        </Box>
                      </Flex>
                      <Box paddingX={2} paddingBottom={2}>
                        <Text size={1} muted>
                          {`${sectionVariant} • ${section?._type?.toUpperCase()}`}
                        </Text>
                      </Box>
                      {section?.replaced && (
                        <Box padding={2}>
                          <Text size={1} style={{ fontStyle: "italic", color: "blue" }} muted>
                            This section has been updated
                          </Text>
                        </Box>
                      )}
                    </>
                  )}
                </Card>
              </React.Fragment>
            )
          })}
        </Stack>
      </Box>
    </Card>
  )
}