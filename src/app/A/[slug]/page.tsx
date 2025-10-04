/**
 * @file A页面详情
 */

import Link from "next/link";

const ADetail = ({params: {slug}}: {params: {slug: string}}) => {
	return (
		<div>
			<h1>这是A页面详情，slug: {slug}</h1>
			<Link href="/A">Go back to A</Link>
		</div>
	);
};
export default ADetail;
