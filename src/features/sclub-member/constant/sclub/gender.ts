import {TOptions} from "@/types";
import {LABELS} from "@/features/sclub-member/constant";
import {GENDERS} from "@/features/sclub-member/types/gender.ts";

export const GENDER_OPTIONS: TOptions[] = [{
    label: LABELS.MALE, value: GENDERS.MALE
}, {
    label: LABELS.FEMALE, value: GENDERS.FEMALE
}]