from sqlmodel import SQLModel, Field, Relationship
from sqlalchemy import Column, String, INTEGER, BOOLEAN, table
from api.v1.models.mixins import TimeMixin
from typing import List

class User(SQLModel, TimeMixin, table=True):
    __tablename__ = "users"

    id: int = Field(primary_key=True, nullable=False, unique=True)
    firstname: str = Field(sa_column=Column("firstname", String, unique=False))
    lastname: str = Field(sa_column=Column("lastname", String, unique=False))
    gender: str = Field(sa_column=Column("gender", String, unique=False))
    mail: str = Field(sa_column=Column("mail", String, unique=True))
    birth: str = Field(sa_column=Column("birth", String, unique=False))
    birth_location: str = Field(sa_column=Column(
        "birth_location", String, unique=False))
    origin_country: str = Field(sa_column=Column(
        "origin_country", String, unique=False))
    profession: str = Field(sa_column=Column(
        "profession", String, unique=False))
    thumbnail: str = Field(sa_column=Column(
        "thumbnail", String, unique=False))
    sys_role: str = Field(sa_column=Column("sys_role", String, unique=False))
    status: int = Field(sa_column=Column("status", INTEGER, unique=False))
    #
    # relationship back_populates
    inscription: List['Inscription'] = Relationship(back_populates="user")
    login: List['Login'] = Relationship(back_populates="user")
    project_assigned: List['ProjectAssigned'] = Relationship(back_populates="user")
    learning_historic: List['LearningHistoric'] = Relationship(back_populates="user")
    assessment: List['Assessment'] = Relationship(back_populates="user")
    chat_group_details: List['ChatGroupDetails'] = Relationship(back_populates="user")
