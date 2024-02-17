import {
    CustomFormItem,
    PasswordFormItem,
} from '@/features/sclub-member/components'
import {
    LABELS,
    PLACEHOLDERS,
    SCLUB_MEMBER_KEYS,
    VALIDATION_MESSAGES,
} from '@/features/sclub-member/constant'
import {requiredRule} from '@/features/sclub-member/handlers'
import {Flex, Input, Typography} from 'antd'
import {Rule} from 'antd/es/form'

export const AccountInformationForm = () => {
    const rules: Record<string, Rule[]> = {
        email: [
            requiredRule(VALIDATION_MESSAGES.EMAIL.REQUIRED),
            {type: 'email', message: VALIDATION_MESSAGES.EMAIL.INVALID},
        ],
    }

    return (
        <Flex vertical align='center' gap={20}>
            <Typography.Title level={2}>Account Information</Typography.Title>
            <div className='w-full max-w-[70%] px-20'>
                <CustomFormItem
                    name={SCLUB_MEMBER_KEYS.EMAIL}
                    label={LABELS.EMAIL}
                    rules={rules.email}
                    required>
                    <Input placeholder={PLACEHOLDERS.EMAIL} size='large'/>
                </CustomFormItem>
                <PasswordFormItem/>
            </div>
        </Flex>
    )
}
