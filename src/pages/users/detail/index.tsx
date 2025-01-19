import { useUserQuery } from "@/services/user/useUserQuery";
import { LinkButton } from "@atlaskit/button/new";
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
      <div className="inline-flex gap-4 flex-col">
        <ul>
          {data &&
            Object.entries(data).map(([key, value]) => (
              <li className="py-1 px-4 bg-slate-100" key={key}>
                {t(key)} : {value}
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
