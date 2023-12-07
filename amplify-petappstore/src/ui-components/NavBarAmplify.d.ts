/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { NavBarMainProps } from "./NavBarMain";
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
export declare type NavBarAmplifyOverridesProps = {
    NavBarAmplify?: PrimitiveOverrideProps<FlexProps>;
    NavBarMain?: NavBarMainProps;
} & EscapeHatchProps;
export declare type NavBarAmplifyProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavBarAmplifyOverridesProps | undefined | null;
}>;
export default function NavBarAmplify(props: NavBarAmplifyProps): React.ReactElement;
