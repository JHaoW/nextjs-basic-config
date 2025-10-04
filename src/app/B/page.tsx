/**
 * @file B页面
 */

import Link from "next/link";
import {API} from "@/constants/api";
import {serverFetch} from "@/utils/fetcher";

const B = async () => {
	const data = await serverFetch(API.REQUEST_DATA);
	console.log("B页面获取到的API数据:", data);

	return (
		<div>
			<h1>这是B页面</h1>
			<p>
				Go back to <Link href="/">Home</Link>
			</p>
			{data && <p>API数据: {data?.message}</p>}
		</div>
	);
};

export default B;
