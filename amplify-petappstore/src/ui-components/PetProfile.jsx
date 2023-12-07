/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/api";
import { deletePet } from "../graphql/mutations";
import { getOverrideProps } from "./utils";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
const client = generateClient();
export default function PetProfile(props) {
  const { pet, overrides, ...rest } = props;
  const [imageSrc, setImageSrc] = useState(undefined);
  const buttonThreeEightSixFourFourEightZeroOnClick = async () => {
    await client.graphql({
      query: deletePet.replaceAll("__typename", ""),
      variables: {
        input: {
          id: pet?.id,
        },
      },
    });
  };
  const melindaMarcusOnClick = () => {
    setImageSrc(
      "https://images.unsplash.com/photo-1699107841514-eed3a0aea3db?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );
  };
  useEffect(() => {
    if (imageSrc === undefined && pet !== undefined && pet?.image !== undefined)
      setImageSrc(pet?.image);
  }, [pet]);
  return (
    <Flex
      gap="24px"
      direction="column"
      width="unset"
      height="574px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      borderRadius="25px"
      padding="24px 24px 100px 24px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "PetProfile")}
      {...rest}
    >
      <Button
        width="272px"
        height="unset"
        shrink="0"
        size="large"
        isDisabled={false}
        variation="link"
        children="Delete"
        onClick={() => {
          buttonThreeEightSixFourFourEightZeroOnClick();
        }}
        {...getOverrideProps(overrides, "Button3864480")}
      ></Button>
      <Image
        width="160px"
        height="160px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={imageSrc}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Name")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="25px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"Name :  "}${pet?.name}`}
          onClick={() => {
            melindaMarcusOnClick();
          }}
          {...getOverrideProps(overrides, "Melinda Marcus")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"Breed :  "}${pet?.breed}`}
          {...getOverrideProps(overrides, "Breed")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"About :  "}${pet?.about}`}
          {...getOverrideProps(overrides, "About")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"Age :  "}${pet?.age}`}
          {...getOverrideProps(overrides, "Age")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 437")}
      >
        <Button
          width="unset"
          height="unset"
          border="1px SOLID rgba(255,255,255,1)"
          shrink="0"
          alignSelf="stretch"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Profile"
          {...getOverrideProps(overrides, "Button29766907")}
        ></Button>
        <Button
          width="272px"
          height="unset"
          border="1px SOLID rgba(255,255,255,1)"
          shrink="0"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Update"
          {...getOverrideProps(overrides, "Button3864418")}
        ></Button>
      </Flex>
    </Flex>
  );
}
