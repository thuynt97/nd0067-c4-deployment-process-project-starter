import * as dotenv from "dotenv";
dotenv.config();

// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  // username: `${process.env.POSTGRES_USERNAME}`,
  // password: process.env.POSTGRES_PASSWORD,
  // database: process.env.POSTGRES_DB,
  // port: Number(process.env.PORT),
  // host: process.env.POSTGRES_HOST,
  // dialect: "postgres",
  // aws_region: process.env.AWS_REGION,
  // aws_profile: process.env.AWS_PROFILE,
  // aws_media_bucket: process.env.AWS_BUCKET,
  // url: process.env.URL,
  // jwt: {
  //   secret: process.env.JWT_SECRET,
  // },
  username: 'thuynt',
  password: '12345678',
  database: 'mydbinstance',
  port: Number(5432),
  host: 'mydbinstance-thuynt.cns2x2oeqcgy.us-east-1.rds.amazonaws.com',
  dialect: "postgres",
  aws_region: 'us-east-1',
  aws_profile: 'default',
  aws_media_bucket: 'elasticbeanstalk-us-east-1-103171825310',
  url: 'http://localhost:8100',
  jwt: {
    secret: 'mysecretstring',
  },
  aws_access_key_id: 'ASIARQBMFD2PNOHEAC75',
  aws_secret_access_key: 'l9UiAwSgnUEasfeAntnL/egDKE9gCOm8l0V3cUtN',
};
