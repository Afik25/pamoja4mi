from sqlmodel import SQLModel, Field, Relationship
from sqlalchemy import Column, String, table
from api.v1.models.mixins import TimeMixin
from typing import List

class School(SQLModel, TimeMixin, table=True):
    __tablename__ = "schools"

    id: int = Field(primary_key=True, nullable=False)
    title: str = Field(sa_column=Column("title", String, nullable=True, unique=True))
    description : str = Field(sa_column=Column("description", String, nullable=True, unique=False))
    # 
    # relationship back_populates
    classes: List['Classes'] = Relationship(back_populates="school")

