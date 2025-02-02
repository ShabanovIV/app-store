import { useEffect } from 'react';
import { Button, Form, FormProps, Input, Spin } from 'antd';
import { useProfilePwdRules } from '../lib/useProfilePwdRules';
import { useProfilePassword } from '../model/useProfilePwdForm';
import { FieldType } from '../types/fields';

interface ProfilePwdFormProps {
  onSuccess?: () => void;
}

export const ProfilePwdForm: React.FC<ProfilePwdFormProps> = ({ onSuccess }) => {
  const [form] = Form.useForm();
  const getPwdRules = useProfilePwdRules(form);
  const { changePass, errorElement, successElement, isLoading, isSuccess } =
    useProfilePassword(form);

  useEffect(() => {
    if (isSuccess && onSuccess) {
      onSuccess();
    }
  }, [isSuccess]);

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    changePass(values.password, values.newPassword);
  };

  return (
    <Form
      form={form}
      name="ProfilePwdForm"
      labelAlign="left"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
      autoComplete="off"
    >
      {errorElement}
      {successElement}
      <Form.Item<FieldType>
        label="Current Password"
        name="password"
        rules={getPwdRules('password')}
      >
        <Input.Password placeholder="Enter current password" />
      </Form.Item>

      <Form.Item<FieldType>
        label="New Password"
        name="newPassword"
        rules={getPwdRules('newPassword')}
      >
        <Input.Password placeholder="Enter new password" />
      </Form.Item>

      <Form.Item<FieldType> label="Confirm password" name="confirm" rules={getPwdRules('confirm')}>
        <Input.Password placeholder="Confirm password" />
      </Form.Item>

      <Button type="primary" htmlType="submit" style={{ width: '100%' }} disabled={isLoading}>
        {isLoading ? <Spin /> : 'Change'}
      </Button>
    </Form>
  );
};
