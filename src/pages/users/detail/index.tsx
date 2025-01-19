import { Input } from "@/components/ui/Input";
import { useUserQuery } from "@/services/user/useUserQuery";
import { LinkButton } from "@atlaskit/button/new";
import { Label } from "@atlaskit/form";
import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { userId } = useParams();
  const { t } = useTranslation();

  const { data } = useUserQuery(Number(userId));

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{t("User-Detail")}</h2>
      <div className="w-4/5 max-w-80">
        <ul>
          {data &&
            Object.entries(data).map(([key, value]) => (
              <li key={key}>
                <Label htmlFor={key}>{t(key)}</Label>
                <Input id={key} value={value} isDisabled />
              </li>
            ))}
        </ul>

        <LinkButton appearance="primary" href={`/users/${userId}/edit`}>
          {t("Edit")}
        </LinkButton>
      </div>
    </div>
  );
};

export default UserDetail;
