export default function KnowledgeLaw() {
    return (
        <div className="w-full h-full flex flex-col">
            <div className="mb-3 p-3 bg-gray-50 border-l-4 border-gray-400 text-gray-600 text-sm rounded-r flex-shrink-0">
                <span className="text-gray-500">💡 提示：在政策文件新弹出的页面右边点击'下载'后可上传到相应文档知识库中进行解析～</span>
            </div>
            <div className="flex-1 overflow-hidden">
                <iframe 
                    src="https://flk.npc.gov.cn" 
                    className="w-full h-full border-0"
                    title="国家法律法规库"
                />
            </div>
        </div>
    );
} 