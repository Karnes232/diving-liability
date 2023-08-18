export default function handler(req, res) {
  console.log(req.body)
  console.log('Hello World')
  res.status(200).json({ hello: `world` })
}
