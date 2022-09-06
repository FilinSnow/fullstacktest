import {Router} from "express";

const router = Router();


router.get('', (req, res) => {
  console.log('Server was been started');
  res.send('Hello Vadik')
})

export default router;