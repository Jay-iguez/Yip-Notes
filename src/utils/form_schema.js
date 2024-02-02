import * as Yup from 'yup'

const kennel_name_schema = Yup
    .string()
    .matches(/^[a-zA-Z\s]+$/, 'Only alphabet characters and spaces are allowed for a Kennel Name.')
    .min(2, 'Kennel Name must have at least 2 chars in length')
    .max(25, 'Kennel Name cannot exceed 25 chars in length.')
    .required()

const kennel_category_schema = Yup
    .string()
    .min(2, 'Category must have at least 2 chars in length')
    .max(20, 'Category cannot exceed 20 chars in length')
    .required()

const yip_name_schema = Yup
    .string()
    .min(2, 'Yip Name must have at least 2 chars in length')
    .max(20, 'Yip Name cannot exceed 20 chars in length')

export {
    kennel_name_schema,
    kennel_category_schema,
    yip_name_schema
}