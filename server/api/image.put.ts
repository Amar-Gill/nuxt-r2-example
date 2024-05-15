export default defineEventHandler(async (event) => {
  const r2Object = await event.context.cloudflare.env.MY_BUCKET.put(
    "mega/ballz",
    "TODO",
  );
  console.info("Uploaded object to R2", { r2Object });
});
