import React, { PureComponent } from 'react'

import Loader from 'view/components/Loader'
import RecipeViewHeader from './RecipeViewHeader'
import RecipeViewIngredients from './RecipeViewIngredients'

import styles from './RecipeView.module.scss'

interface IRecipeViewComponentProps {
  getRecipeData: (recipeId: string) => void;
  resetState: () => void;
  recipeId: string;
  isLoading: boolean | null;
  recipeData: any;
}

class RecipeViewComponent extends PureComponent<IRecipeViewComponentProps> {
  componentDidMount() {
    const { getRecipeData, recipeId } = this.props

    if (recipeId) {
      getRecipeData(recipeId)
    }
  }

  componentWillUnmount() {
    const { resetState } = this.props

    resetState()
  }

  render() {
    const { isLoading } = this.props

    return (
      <>
        {!isLoading ? (
          <div className={ styles.recipeView }>
            <RecipeViewHeader />
            <RecipeViewIngredients />
          </div>
        ) : (
          <div className={ styles.spinnerContainer }>
            <Loader />
          </div>
        )}
      </>
    )
  }
}

export default RecipeViewComponent
