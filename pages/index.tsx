import {Button, Card, message} from "antd";
import copy from "copy-to-clipboard";
import React from "react";
import i18n from "../data/i18n";
import Link from "next/link";

export default function IndexPage() {
    const [messageApi, contextHolder] = message.useMessage();
    const {t} = i18n;
    const demoPath = "/demo";
    const copyClick = () => {
        copy("/fcb ");
        messageApi.success(t("message.copied")).then(() => messageApi);
    }
    return (
        <>
            {contextHolder}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
            }}>
                <div style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}>
                    <Card title={t("home.title")} extra={
                        <Link href={demoPath}>
                            {t("home.demo")}
                        </Link>
                    } style={{width: 400, margin: 'auto'}}>
                        <p>{t("home.generate")}</p>
                        ◆ {t("home.instruction1")} <Button type="dashed" size={"small"} onClick={copyClick}>/fcb [ID]</Button><br/>
                        ◆ {t("home.instruction2")}
                    </Card>
                </div>
            </div>
        </>
    )
}
