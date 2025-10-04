/**
 * @file fetch封装，添加统一的请求前缀和错误处理
 */

const baseURL = process.env.API_BASE_URL ?? "http://localhost:3000";

export async function serverFetch(path: string, options?: RequestInit) {
	const url = path.startsWith("http") ? path : `${baseURL}${path}`;
	const res = await fetch(url, {
		...options,
		// 防止缓存
		cache: "no-store",
	});
	if (!res.ok) {
		throw new Error(`Fetch failed: ${res.status}`);
	}
	return res.json();
}
