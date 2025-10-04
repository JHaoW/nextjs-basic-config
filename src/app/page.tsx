/**
 * @file 首页
 */

import Link from "next/link";

export default function Home() {
	return (
		<div>
			<h1>这是首页</h1>
			<p>
				Go to <Link href="/A">A Page</Link>
			</p>
			<p>
				Go to <Link href="/B">B Page</Link>
			</p>
		</div>
	);
}
