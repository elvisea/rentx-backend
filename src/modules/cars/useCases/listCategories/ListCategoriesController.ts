import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

// Todo UseCase deverá ter apenas um Controller
class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);
    const all = await listCategoriesUseCase.execute();

    return response.status(201).json(all);
  }
}

export { ListCategoriesController };
