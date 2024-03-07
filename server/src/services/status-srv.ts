import { Status } from "../models";

export class StatusSrv {
  static async getManyByIds(ids, options) {
    return Status.find({ _id: { $in: ids } })
      .limit(options.limit || 10)
      .skip(options.offset)
      .sort(options.sort);
  }

  static async getAll(_, options) {
    // const exclusionIds = ["654fa22e17209e89fb053528"]
    // const query = {
    //     _id: { $nin: exclusionIds }, // Exclude the specified IDs
    //   };
    // const results = await Status.find(query);
    // console.log(results)
    
    return Status.find()
      .limit(options.limit || 10)
      .skip(options.offset)
      .sort(options.sort);
  }
}
