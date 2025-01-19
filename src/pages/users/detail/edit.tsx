// import useUserQuery from "@/services/user/useUserQuery";
// import useUserUpdate from "@/services/user/useUserUpdate";
import { useUserQuery } from "@/services/user/useUserQuery";
// import useUserUpdate from "@/services/user/useUserUpdate";
import Button from "@atlaskit/button/new";
import React from "react";
import { useParams } from "react-router-dom";

const UserEdit = () => {
  const { userId } = useParams();
  const { data: user } = useUserQuery(Number(userId));
  // const { updateUserMutation } = useUserUpdate();

  console.log({ user });

  const handleUpdate = async () => {
    if (!user) return;

    console.log("update user", user);

    // await updateUserMutation({
    //   id: user.id,
    //   user: {
    //     name: "test",
    //     email: "test@gmail.com",
    //   },
    // });
  };

  // const { name, email } = user || {};

  return (
    <div>
      <h1>Edit User</h1>
      <p>Editing user with ID: {userId}</p>
      <Button onClick={handleUpdate}>test</Button>
      {/* 실제 폼을 추가할 수 있습니다 */}
      {/* <Form onSubmit={(formData) => console.log("form data", formData)}>
        {({ formProps }) => (
          <form {...formProps} name="native-validation-example">
            <Field label="이름" name="name" isRequired defaultValue="">
              {({ fieldProps }: any) => (
                <Fragment>
                  <Textfield
                    {...fieldProps}
                    pattern=".{0,20}"
                    data-testid="nativeFormValidationTest"
                  />
                </Fragment>
              )}
            </Field>
            <Field
              label="Input must be numeric"
              name="number"
              isRequired
              defaultValue=""
            >
              {({ fieldProps }: any) => (
                <Fragment>
                  <Textfield
                    {...fieldProps}
                    type="number"
                    data-testid="nativeFormValidationTestNumber"
                  />
                </Fragment>
              )}
            </Field>
            <Field
              label="Input must be an email"
              name="email"
              isRequired
              defaultValue=""
            >
              {({ fieldProps }: any) => (
                <Fragment>
                  <Textfield
                    {...fieldProps}
                    type="email"
                    data-testid="nativeFormValidationTestEmail"
                  />
                </Fragment>
              )}
            </Field>
            <FormFooter>
              <Button type="submit" appearance="primary">
                Submit
              </Button>
            </FormFooter>
          </form>
        )}
      </Form> */}
    </div>
  );
};

export default UserEdit;
