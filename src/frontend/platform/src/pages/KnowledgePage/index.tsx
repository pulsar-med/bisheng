import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../../components/bs-ui/tabs";

import { useTranslation } from "react-i18next";
import { useState } from "react";
import KnowledgeFile from "./KnowledgeFile";
import KnowledgeQa from "./KnowledgeQa";
import KnowledgeLaw from "./KnowledgeLaw";


export default function index() {

    const { t } = useTranslation();

    const defaultValue = (() => {
        const page = window.LibPage;
        return page ? page.type : 'file'
    })();

    const [activeTab, setActiveTab] = useState(defaultValue);

    return (
        <div className="w-full h-full px-2 pt-4 relative flex flex-col">
            <Tabs 
                defaultValue={defaultValue} 
                className="w-full flex flex-col flex-1"
                onValueChange={setActiveTab}
            >
                <TabsList className="w-fit">
                    <TabsTrigger value="file">{t('lib.fileData')}</TabsTrigger>
                    <TabsTrigger value="qa" className="roundedrounded-xl">{t('lib.qaData')}</TabsTrigger>
                    <TabsTrigger value="law">{t('lib.lawData')}</TabsTrigger>
                </TabsList>
                <TabsContent value="qa" className="flex-1 overflow-hidden">
                    <KnowledgeQa />
                </TabsContent>
                <TabsContent value="file" className="flex-1 overflow-hidden">
                    <KnowledgeFile />
                </TabsContent>
                <TabsContent value="law" className="flex-1 overflow-hidden">
                    <KnowledgeLaw />
                </TabsContent>
            </Tabs>
        </div>
    );
}