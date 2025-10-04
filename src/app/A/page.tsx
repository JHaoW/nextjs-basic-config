/**
 * @file A页面
 */

import Link from "next/link";

const A = () => (
	<div>
		<h1>这是A页面</h1>
		<p>
			Go back to
			<Link href="/" replace>
				Home
			</Link>
		</p>
		<p>
			Go to <Link href="/A/detail">A Detail</Link>
		</p>
	</div>
);

export default A;
