/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MarketingFooterBrandProps } from "./MarketingFooterBrand";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FooterMainOverridesProps = {
    FooterMain?: PrimitiveOverrideProps<FlexProps>;
    MarketingFooterBrand?: MarketingFooterBrandProps;
} & EscapeHatchProps;
export declare type FooterMainProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FooterMainOverridesProps | undefined | null;
}>;
export default function FooterMain(props: FooterMainProps): React.ReactElement;
