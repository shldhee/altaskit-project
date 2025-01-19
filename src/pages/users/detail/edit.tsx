import { useUserQuery } from "@/services/user/useUserQuery";
import Button from "@atlaskit/button/new";
import Form, { Field, FormFooter } from "@atlaskit/form";
import Textfield from "@atlaskit/textfield";
import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

const UserEdit = () => {
  const { userId } = useParams();
  const { t } = useTranslation();
  const { data: user } = useUserQuery(Number(userId));
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!user) return;

    try {
      // 수정 API 요청
      // await updateUserMutation.mutateAsync({
      //   id: user.id,
      //   user: {
      //     name: formData.name,
      //     email: formData.email,
      //   },
      // });
      alert("유저 정보 수정 성공");
      navigate("/users");
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update user.");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{t("User-Edit")}</h2>
      <div className="w-4/5 max-w-80">
        <Form onSubmit={handleSubmit}>
          {({ formProps }) => (
            <form {...formProps} name="native-validation-example">
              <Field
                label={t("name")}
                name="name"
                isRequired
                defaultValue={user?.name}
              >
                {({ fieldProps }) => (
                  <Fragment>
                    <Textfield {...fieldProps} pattern=".{0,20}" />
                  </Fragment>
                )}
              </Field>
              <Field
                label={t("email")}
                name="email"
                isRequired
                defaultValue={user?.email}
              >
                {({ fieldProps }) => (
                  <Fragment>
                    <Textfield {...fieldProps} type="email" />
                  </Fragment>
                )}
              </Field>
              <FormFooter align="start">
                <Button type="submit" appearance="primary">
                  {t("Edit")}
                </Button>
                <Button
                  appearance="subtle"
                  onClick={() => {
                    navigate(`/users/${userId}`);
                  }}
                >
                  {t("Cancel")}
                </Button>
              </FormFooter>
            </form>
          )}
        </Form>
      </div>
    </div>
  );
};

export default UserEdit;
