import {makeTypesFromObject} from "@/utils";

const genders = {
    MALE: 'male', FEMALE: 'female',
} as const

type TGenderKey = keyof typeof genders
type TGender = typeof genders[TGenderKey]
const GENDERS = makeTypesFromObject(genders)

export {GENDERS, type TGender, type TGenderKey}